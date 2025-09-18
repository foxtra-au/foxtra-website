import { NextRequest, NextResponse } from 'next/server';

const RETELL_API_KEY = process.env.RETELL_API_KEY;
const RETELL_API_BASE = process.env.RETELL_API_BASE || 'https://api.retellai.com/v2';

export async function POST(request: NextRequest) {
  try {
    const { chat_id, access_token } = await request.json();

    if (!chat_id) {
      return NextResponse.json(
        { error: 'Missing chat_id' },
        { status: 400 }
      );
    }

    // Check if we're in demo mode (no API key provided)
    if (!RETELL_API_KEY || RETELL_API_KEY === 'demo-key' || RETELL_API_KEY === 'your-retell-ai-api-key-here') {
      // Demo mode - simulate chat ending
      await new Promise(resolve => setTimeout(resolve, 300)); // Small delay for realism
      
      return NextResponse.json({
        chat_id,
        status: 'ended',
        message: 'Chat session ended successfully',
        ended_at: new Date().toISOString(),
        demo_mode: true
      });
    }

    // Production mode - actual Retell AI API call to end the web call
    const retellResponse = await fetch(`${RETELL_API_BASE}/end-call`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RETELL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        call_id: chat_id,
      }),
    });

    if (!retellResponse.ok) {
      const errorData = await retellResponse.json().catch(() => ({}));
      console.error('Retell AI API error:', {
        status: retellResponse.status,
        statusText: retellResponse.statusText,
        error: errorData
      });
      
      return NextResponse.json(
        { 
          error: 'Failed to end chat session with Retell AI',
          details: errorData.message || 'Unknown error'
        },
        { status: retellResponse.status }
      );
    }

    const data = await retellResponse.json();
    
    return NextResponse.json({
      chat_id,
      status: 'ended',
      message: 'Chat session ended successfully',
      ended_at: new Date().toISOString(),
      call_data: data,
      demo_mode: false
    });

  } catch (error) {
    console.error('Error ending chat session:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
