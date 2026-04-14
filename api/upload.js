// api/upload.js
import { put } from '@vercel/blob';

export default async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).send('Method Not Allowed');

  // Basic security check (Match this with your frontend password)
  const auth = request.headers.authorization;
  if (auth !== 'Paul1126') {
      return response.status(401).json({ error: "Unauthorized" });
  }

  try {
    const file = request.body;
    const blob = await put('portfolio/image.jpg', file, {
      access: 'public', // This makes the file viewable to the public
    });

    return response.status(200).json(blob);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
