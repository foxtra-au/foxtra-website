import { NextRequest, NextResponse } from 'next/server';

// This would typically use your Retell AI API key
const RETELL_API_KEY = process.env.RETELL_API_KEY || 'demo-key';
const RETELL_API_BASE = 'https://api.retellai.com/v2';

export async function POST(request: NextRequest) {
  try {
    // For demo purposes, we'll simulate the Retell AI response
    // In production, you would make an actual API call to Retell AI
    
    if (RETELL_API_KEY === 'demo-key') {
      // Demo mode - simulate chat creation
      const chatId = `demo-chat-${Date.now()}`;
      return NextResponse.json({
        chat_id: chatId,
        status: 'active'
      });
    }

    // Production mode - actual Retell AI API call
    const response = await fetch(`${RETELL_API_BASE}/create-chat`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RETELL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        agent_id: process.env.RETELL_AGENT_ID, // Your Retell AI agent ID
        // Add other configuration as needed
      }),
    });

    if (!response.ok) {
      throw new Error(`Retell AI API error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error creating chat:', error);
    return NextResponse.json(
      { error: 'Failed to create chat session' },
      { status: 500 }
    );
  }
}
