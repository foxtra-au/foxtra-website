import { NextRequest, NextResponse } from 'next/server';

const RETELL_API_KEY = process.env.RETELL_API_KEY;
const RETELL_CHAT_AGENT_ID = process.env.RETELL_CHAT_AGENT_ID;
const RETELL_API_BASE = process.env.RETELL_API_BASE || 'https://api.retellai.com/v2';

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber, agentName, agentRole } = await request.json();

    // Validate required fields
    if (!phoneNumber || !agentName || !agentRole) {
      return NextResponse.json(
        { error: 'Missing required fields: phoneNumber, agentName, agentRole' },
        { status: 400 }
      );
    }

    // Demo mode if API keys are not configured
    if (!RETELL_API_KEY || !RETELL_CHAT_AGENT_ID) {
      console.log('Demo mode: Retell AI keys not configured');
      return NextResponse.json({
        success: true,
        demo: true,
        message: 'Demo mode: Call would be registered with Retell AI',
        callData: {
          phoneNumber,
          agentName,
          agentRole,
          status: 'demo'
        }
      });
    }

    // Production mode - actual Retell AI API call
    const retellResponse = await fetch(`${RETELL_API_BASE}/create-phone-call`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RETELL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        agent_id: RETELL_CHAT_AGENT_ID,
        to_number: phoneNumber,
        from_number: '+61', // You can configure this or get from user
        metadata: {
          agent_name: agentName,
          agent_role: agentRole,
          source: 'foxtra-website'
        },
        retell_llm_dynamic_variables: {
          agent_name: agentName,
          agent_role: agentRole,
          customer_name: 'Website Visitor'
        }
      }),
    });

    if (!retellResponse.ok) {
      const errorData = await retellResponse.text();
      console.error('Retell AI API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to create call with Retell AI' },
        { status: retellResponse.status }
      );
    }

    const callData = await retellResponse.json();
    
    return NextResponse.json({
      success: true,
      demo: false,
      callId: callData.call_id,
      message: 'Call successfully registered with Retell AI',
      callData: {
        phoneNumber,
        agentName,
        agentRole,
        callId: callData.call_id,
        status: 'initiated'
      }
    });

  } catch (error) {
    console.error('Error creating agent call:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
