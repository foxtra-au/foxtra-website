import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { chatId } = await request.json();

    if (!chatId) {
      return NextResponse.json(
        { error: 'chatId is required' },
        { status: 400 }
      );
    }

    // Get environment variables
    const retellApiBase = 'https://api.retellai.com';
    const retellApiKey = process.env.RETELL_API_KEY;

    if (!retellApiKey) {
      return NextResponse.json(
        { error: 'Retell API key not configured' },
        { status: 500 }
      );
    }

    console.log('Ending chat session:', chatId);

    // End the chat session
    const endChatResponse = await fetch(`${retellApiBase}/chats/${chatId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${retellApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 'ended'
      }),
    });

    if (!endChatResponse.ok) {
      const errorData = await endChatResponse.json().catch(() => ({}));
      console.error('Retell AI end-chat error:', {
        status: endChatResponse.status,
        statusText: endChatResponse.statusText,
        error: errorData
      });
      
      // Don't fail if end-chat fails, just log it
      console.warn('Failed to end chat session in Retell AI, but continuing...');
    }

    return NextResponse.json({
      message: 'Chat session ended successfully',
      chatId: chatId,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error ending chat session:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
