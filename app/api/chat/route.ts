import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Você é um assistente da Studio Nuvem, uma agência de marketing digital focada em performance. Seja prestativo, profissional e sempre direcione para agendar uma conversa para conhecer melhor as necessidades do cliente. Mantenha respostas concisas e em português.'
          },
          ...messages
        ],
        max_tokens: 150,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API Error:', response.status, errorData);
      throw new Error(`OpenAI API Error: ${response.status}`);
    }

    const data = await response.json();
    
    return NextResponse.json({
      message: data.choices[0].message.content
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}