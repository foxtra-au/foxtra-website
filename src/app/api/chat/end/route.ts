import { NextRequest, NextResponse } from 'next/server';

const RETELL_API_KEY = process.env.RETELL_API_KEY || 'demo-key';
const RETELL_API_BASE = 'https://api.retellai.com/v2';

export async function POST(request: NextRequest) {
  try {
    const { chat_id } = await request.json();

    if (!chat_id) {
      return NextResponse.json(
        { error: 'Missing chat_id' },
        { status: 400 }
      );
    }

    if (RETELL_API_KEY === 'demo-key') {
      // Demo mode - simulate chat ending
      return NextResponse.json({
        chat_id,
        status: 'ended',
        message: 'Chat session ended successfully'
      });
    }

    // Production mode - actual Retell AI API call
    const response = await fetch(`${RETELL_API_BASE}/end-chat`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RETELL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id,
      }),
    });

    if (!response.ok) {
      throw new Error(`Retell AI API error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error ending chat:', error);
    return NextResponse.json(
      { error: 'Failed to end chat session' },
      { status: 500 }
    );
  }
}
