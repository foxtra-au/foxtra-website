import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { chatId, message } = await request.json();

    if (!chatId || !message) {
      return NextResponse.json(
        { error: 'chatId and message are required' },
        { status: 400 }
      );
    }

    // Get environment variables
    const retellApiBase = 'https://api.retellai.com';
    const retellApiKey = process.env.RETELL_API_KEY;
    
    console.log('Sending message to chatId:', chatId);
    console.log('Message content:', message);
    
    const requestBody = {
      chat_id: chatId,
      content: message
    };
    console.log('Request body to Retell:', JSON.stringify(requestBody, null, 2));

    if (!retellApiKey) {
      return NextResponse.json(
        { error: 'Retell API key not configured' },
        { status: 500 }
      );
    }

    // Send message to existing chat session
    const chatCompletionResponse = await fetch(`${retellApiBase}/create-chat-completion`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${retellApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!chatCompletionResponse.ok) {
      const errorData = await chatCompletionResponse.json().catch(() => ({}));
      console.error('Retell AI chat-completion error:', {
        status: chatCompletionResponse.status,
        statusText: chatCompletionResponse.statusText,
        error: errorData
      });
      
      return NextResponse.json(
        { 
          error: `Retell AI chat-completion error: ${errorData.message || 'Unknown error'}`,
          details: {
            status: chatCompletionResponse.status,
            statusText: chatCompletionResponse.statusText,
            errorData: errorData
          }
        },
        { status: chatCompletionResponse.status }
      );
    }

    const completionData = await chatCompletionResponse.json();
    
    // Debug: Log the full response to understand the structure
    console.log('Retell API response:', JSON.stringify(completionData, null, 2));
    
    // Try multiple response formats that Retell might use
    let aiResponse = null;
    
    // Check if response is directly in completionData.response
    if (completionData.response) {
      aiResponse = completionData.response;
    }
    // Check if response is in messages array (previous working format)
    else if (completionData.messages && completionData.messages.length > 0) {
      const lastMessage = completionData.messages[completionData.messages.length - 1];
      aiResponse = lastMessage.content || lastMessage.text || lastMessage.message;
    }
    // Check other possible fields
    else if (completionData.content) {
      aiResponse = completionData.content;
    }
    else if (completionData.text) {
      aiResponse = completionData.text;
    }
    
    if (!aiResponse) {
      console.log('No AI response found in any expected field');
      return NextResponse.json(
        { error: 'No AI response received from Retell AI' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message_id: completionData.message_id || `retell-${Date.now()}`,
      response: aiResponse,
      timestamp: new Date().toISOString(),
      chatId: chatId,
      retell_connected: true
    });

  } catch (error) {
    console.error('Error sending message:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
