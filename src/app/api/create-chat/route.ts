import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Get environment variables
    const retellApiBase = 'https://api.retellai.com';
    const retellApiKey = process.env.RETELL_API_KEY;
    const retellChatAgentId = process.env.RETELL_CHAT_AGENT_ID || 'agent_3977732b4acb118093e6f230dc';
    
    console.log('Creating new chat session with Agent ID:', retellChatAgentId);

    if (!retellApiKey) {
      return NextResponse.json(
        { error: 'Retell API key not configured' },
        { status: 500 }
      );
    }

    // Create a new chat session with Retell AI
    const createChatResponse = await fetch(`${retellApiBase}/create-chat`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${retellApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        agent_id: retellChatAgentId,
        user_id: `user-${Date.now()}`,
        user_name: 'Website Visitor',
        metadata: {
          source: 'foxtra-website',
          timestamp: new Date().toISOString()
        }
      }),
    });

    if (!createChatResponse.ok) {
      const errorData = await createChatResponse.json().catch(() => ({}));
      console.error('Retell AI create-chat error:', {
        status: createChatResponse.status,
        statusText: createChatResponse.statusText,
        error: errorData
      });
      
      return NextResponse.json(
        { 
          error: `Retell AI create-chat error: ${errorData.message || 'Unknown error'}`,
          details: {
            status: createChatResponse.status,
            statusText: createChatResponse.statusText,
            errorData: errorData
          }
        },
        { status: createChatResponse.status }
      );
    }

    const chatData = await createChatResponse.json();
    const chatId = chatData.chat_id;
    
    // Get the initial intro message from Retell AI
    let introMessage = null;
    try {
      const introResponse = await fetch(`${retellApiBase}/create-chat-completion`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${retellApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          content: "Hello"
        }),
      });

      if (introResponse.ok) {
        const introData = await introResponse.json();
        // Try multiple response formats
        if (introData.response) {
          introMessage = introData.response;
        } else if (introData.messages && introData.messages.length > 0) {
          const lastMessage = introData.messages[introData.messages.length - 1];
          introMessage = lastMessage.content || lastMessage.text || lastMessage.message;
        } else if (introData.content) {
          introMessage = introData.content;
        } else if (introData.text) {
          introMessage = introData.text;
        }
      }
    } catch (introError) {
      console.log('Could not get intro message from Retell:', introError);
    }
    
    return NextResponse.json({
      chatId: chatId,
      agent_name: chatData.agent_name || 'Tracy',
      status: chatData.chat_status || 'active',
      created_at: new Date().toISOString(),
      introMessage: introMessage,
      retell_connected: true
    });

  } catch (error) {
    console.error('Error creating chat session:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
