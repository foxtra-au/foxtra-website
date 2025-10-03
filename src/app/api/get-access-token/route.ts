import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const agent_id = process.env.RETELL_WEBCALL_AGENT_ID;
    const api_key = process.env.RETELL_API_KEY;

    console.log('API endpoint called - checking environment variables:');
    console.log('Agent ID exists:', !!agent_id);
    console.log('API Key exists:', !!api_key);
    console.log('Agent ID value:', agent_id);

    if (!agent_id) {
      console.error('Voice service configuration error: Agent ID not found');
      return NextResponse.json(
        { error: 'Voice service configuration error: Agent ID not found' },
        { status: 500 }
      );
    }

    if (!api_key) {
      console.error('Voice service configuration error: API key not found');
      return NextResponse.json(
        { error: 'Voice service configuration error: API key not found' },
        { status: 500 }
      );
    }

    // Create the call using Retell API
    console.log('Creating voice call with agent_id:', agent_id);
    const createCallResponse = await fetch('https://api.retellai.com/v2/create-web-call', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RETELL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        agent_id,
        call_type: 'web_call'
      }),
    });

    console.log('Create call response status:', createCallResponse.status);

    if (!createCallResponse.ok) {
      const errorData = await createCallResponse.text();
      console.error('Voice service create-call API error:', {
        status: createCallResponse.status,
        statusText: createCallResponse.statusText,
        error: errorData,
        agent_id: agent_id,
        api_key_length: process.env.RETELL_API_KEY?.length
      });
      return NextResponse.json(
        { error: 'Failed to create voice call. Please try again.' },
        { status: createCallResponse.status }
      );
    }

    const createCallData = await createCallResponse.json();
    console.log('Create call response: SUCCESS, call_id:', createCallData.call_id);
    const call_id = createCallData.call_id;

    if (!call_id) {
      console.error('Voice service error: No call_id in response');
      return NextResponse.json(
        { error: 'Voice service error. Please try again.' },
        { status: 500 }
      );
    }

    // Fetch call details to get access_token
    console.log('Fetching call details for call_id:', call_id);
    const getCallResponse = await fetch(`https://api.retellai.com/v2/get-call/${call_id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.RETELL_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Get call response status:', getCallResponse.status);

    if (!getCallResponse.ok) {
      const errorData = await getCallResponse.text();
      console.error('Voice service get-call API error:', {
        status: getCallResponse.status,
        statusText: getCallResponse.statusText,
        error: errorData,
        call_id: call_id
      });
      return NextResponse.json(
        { error: 'Failed to initialize voice call. Please try again.' },
        { status: getCallResponse.status }
      );
    }

    const getCallData = await getCallResponse.json();
    console.log('Get call response: SUCCESS, call_id:', call_id);
    const access_token = getCallData.access_token;

    if (!access_token) {
      console.error('Voice service error: No access_token in response');
      return NextResponse.json(
        { error: 'Voice service authentication error. Please try again.' },
        { status: 500 }
      );
    }

    // Return the access token
    return NextResponse.json({
      access_token
    });

  } catch (error) {
    console.error('Error in voice call API:', error);
    return NextResponse.json(
      { error: 'Voice service temporarily unavailable. Please try again later.' },
      { status: 500 }
    );
  }
}
