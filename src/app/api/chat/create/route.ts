import { NextRequest, NextResponse } from 'next/server';

const RETELL_API_KEY = process.env.RETELL_API_KEY;
const RETELL_CHAT_AGENT_ID = process.env.RETELL_CHAT_AGENT_ID;
const RETELL_API_BASE = process.env.RETELL_API_BASE || 'https://api.retellai.com/v2';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    
    // Check if we're in demo mode (no API key provided)
    if (!RETELL_API_KEY || RETELL_API_KEY === 'demo-key' || RETELL_API_KEY === 'your-retell-ai-api-key-here') {
      // Demo mode - simulate chat creation
      const chatId = `demo-chat-${Date.now()}`;
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return NextResponse.json({
        chat_id: chatId,
        status: 'active',
        created_at: new Date().toISOString(),
        agent_id: 'demo-agent',
        demo_mode: true
      });
    }

    // Validate required environment variables
    if (!RETELL_CHAT_AGENT_ID) {
      return NextResponse.json(
        { error: 'Retell AI agent ID not configured' },
        { status: 500 }
      );
    }

    // Production mode - actual Retell AI API call
    const retellResponse = await fetch(`${RETELL_API_BASE}/create-web-call`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RETELL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        agent_id: RETELL_CHAT_AGENT_ID,
        metadata: {
          user_id: body.user_id || `user-${Date.now()}`,
          session_type: 'web_chat',
          created_from: 'foxtra_website'
        },
        retell_llm_dynamic_variables: {
          user_name: body.user_name || 'Visitor',
          company_name: 'Foxtra AI',
          current_time: new Date().toISOString()
        }
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
          error: 'Failed to create chat session with Retell AI',
          details: errorData.message || 'Unknown error'
        },
        { status: retellResponse.status }
      );
    }

    const data = await retellResponse.json();
    
    return NextResponse.json({
      chat_id: data.call_id,
      access_token: data.access_token,
      status: 'active',
      created_at: new Date().toISOString(),
      agent_id: RETELL_CHAT_AGENT_ID,
      demo_mode: false
    });

  } catch (error) {
    console.error('Error creating chat session:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
