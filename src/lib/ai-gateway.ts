/**
 * Vercel AI Gateway & LLM Client Configuration
 * Uses Vercel AI Gateway Consumer Key for secure, routed AI requests.
 */

export const AI_GATEWAY_CONFIG = {
  apiKey: process.env.VERCEL_TOKEN || '',
  endpoint: 'https://ai-gateway.vercel.sh/v1',
  defaultModel: 'openai/gpt-4o-mini',
};

export async function queryAIGateway(prompt: string, model: string = AI_GATEWAY_CONFIG.defaultModel) {
  try {
    const response = await fetch(`${AI_GATEWAY_CONFIG.endpoint}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AI_GATEWAY_CONFIG.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: 'system',
            content: 'You are an elite real estate advisor for Act Development in Dhaka, Bangladesh. You assist clients with luxury properties across Gulshan, Baridhara, Uttara, and Bashundhara.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`AI Gateway error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || '';
  } catch (error) {
    console.error('Error querying Vercel AI Gateway:', error);
    return null;
  }
}
