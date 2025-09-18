import { NextRequest, NextResponse } from 'next/server';

const RETELL_API_KEY = process.env.RETELL_API_KEY;
const RETELL_API_BASE = process.env.RETELL_API_BASE || 'https://api.retellai.com/v2';

// Demo responses for different types of questions
const getDemoResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "Hello! Great to meet you! I'm here to help you learn about our AI services. What would you like to know about?";
  }
  
  if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
    return "We offer comprehensive AI solutions including:\n\n• AI Chat Agents (like me!) for customer support\n• AI Voice Agents for phone automation\n• Custom AI integrations\n• Automation workflows\n• AI-powered SEO and marketing\n\nWhich area interests you most?";
  }
  
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
    return "Our AI Chat Agent solutions start from $2,499/month and include:\n\n✓ 24/7 intelligent responses\n✓ Multi-platform integration\n✓ Lead qualification\n✓ Appointment booking\n✓ Custom training on your data\n\nWould you like to schedule a demo to see the full capabilities?";
  }
  
  if (lowerMessage.includes('demo') || lowerMessage.includes('schedule') || lowerMessage.includes('meeting')) {
    return "I'd love to schedule a demo for you! Our team can show you:\n\n• Live AI chat capabilities\n• Integration with your existing systems\n• Custom conversation flows\n• Analytics and reporting\n\nWhat's the best time for a 30-minute demo this week?";
  }
  
  if (lowerMessage.includes('integration') || lowerMessage.includes('api')) {
    return "Our AI agents integrate seamlessly with:\n\n• Website chat widgets\n• WhatsApp Business API\n• Slack and Teams\n• CRM systems (Salesforce, HubSpot)\n• Custom applications via REST API\n\nWe handle all the technical setup. What platform are you looking to integrate with?";
  }
  
  if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
    return "I'm here to help! I can assist you with:\n\n• Information about our AI services\n• Scheduling demos and consultations\n• Technical questions about integrations\n• Pricing and package details\n\nWhat specific question do you have?";
  }
  
  // Default response
  return "That's a great question! Our AI solutions are designed to handle complex conversations just like this one. We can customize responses based on your specific business needs and train the AI on your company data.\n\nWould you like to learn more about how we can create a custom AI agent for your business?";
};

export async function POST(request: NextRequest) {
  try {
    const { chat_id, message, access_token } = await request.json();

    if (!chat_id || !message) {
      return NextResponse.json(
        { error: 'Missing chat_id or message' },
        { status: 400 }
      );
    }

    // Check if we're in demo mode (no API key provided)
    if (!RETELL_API_KEY || RETELL_API_KEY === 'demo-key' || RETELL_API_KEY === 'your-retell-ai-api-key-here') {
      // Demo mode - simulate AI response
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000)); // Simulate API delay
      
      const response = getDemoResponse(message);
      
      return NextResponse.json({
        response,
        chat_id,
        message_id: `msg-${Date.now()}`,
        timestamp: new Date().toISOString(),
        demo_mode: true
      });
    }

    // Production mode - For Retell AI web calls, we typically don't send individual messages
    // Instead, the conversation happens through the WebRTC connection
    // This endpoint can be used for text-based fallback or logging
    
    // If you need to send a message to an ongoing call, use the appropriate Retell AI endpoint
    const retellResponse = await fetch(`${RETELL_API_BASE}/update-call`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RETELL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        call_id: chat_id,
        actions: [
          {
            type: 'message',
            content: message
          }
        ]
      }),
    });

    if (!retellResponse.ok) {
      const errorData = await retellResponse.json().catch(() => ({}));
      console.error('Retell AI API error:', {
        status: retellResponse.status,
        statusText: retellResponse.statusText,
        error: errorData
      });

      // Fallback to demo response if Retell AI fails
      const fallbackResponse = getDemoResponse(message);
      
      return NextResponse.json({
        response: fallbackResponse,
        chat_id,
        message_id: `fallback-msg-${Date.now()}`,
        timestamp: new Date().toISOString(),
        fallback_mode: true,
        error: 'Retell AI unavailable, using fallback response'
      });
    }

    const data = await retellResponse.json();
    
    return NextResponse.json({
      response: data.response || getDemoResponse(message),
      chat_id,
      message_id: data.message_id || `msg-${Date.now()}`,
      timestamp: new Date().toISOString(),
      demo_mode: false
    });

  } catch (error) {
    console.error('Error getting chat completion:', error);
    
    // Provide fallback response even on error
    const { chat_id, message } = await request.json().catch(() => ({ chat_id: null, message: '' }));
    const fallbackResponse = message ? getDemoResponse(message) : "I'm sorry, I'm having trouble connecting right now. Please try again.";
    
    return NextResponse.json({
      response: fallbackResponse,
      chat_id,
      message_id: `error-fallback-${Date.now()}`,
      timestamp: new Date().toISOString(),
      error_fallback: true
    });
  }
}
