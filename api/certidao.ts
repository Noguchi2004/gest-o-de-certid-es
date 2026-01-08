import type { VercelRequest, VercelResponse } from '@vercel/node';

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyWuNyybudc18dO83VPjdVWEujBK_Sm9YxUDbombhkJjGkSUCWc3asdGDPgznYdMlN6mQ/exec'; // termina com /exec

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { certidao } = req.body;

    const gsResponse = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ certidao }),
    });

    const data = await gsResponse.json();

    return res.status(200).json(data);
  } catch (error: any) {
    console.error(error);
    return res
      .status(500)
      .json({ ok: false, error: 'Erro ao falar com Apps Script' });
  }
}
