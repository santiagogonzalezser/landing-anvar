import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Convert base64 to File/Blob for form data
function base64ToBlob(base64: string, mimeType: string): Blob {
  const byteCharacters = atob(base64.split(',')[1]);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimeType });
}

export async function POST(request: NextRequest) {
  try {
    const { image, instructions } = await request.json();

    if (!image || !instructions) {
      return NextResponse.json(
        { error: 'Image and instructions are required' },
        { status: 400 }
      );
    }

    // Convert base64 image to blob
    const imageBlob = base64ToBlob(image, 'image/png');

    // Create form data for DALL-E 2 edit endpoint
    const formData = new FormData();
    formData.append('image', imageBlob, 'image.png');
    formData.append('prompt', instructions);
    formData.append('n', '1');
    formData.append('size', '1024x1024');

    const response = await fetch('https://api.openai.com/v1/images/edits', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      return NextResponse.json(
        { error: `Failed to edit image: ${errorData.error?.message || 'Unknown error'}` },
        { status: 500 }
      );
    }

    const data = await response.json();
    const editedImageUrl = data.data[0]?.url;

    if (!editedImageUrl) {
      return NextResponse.json(
        { error: 'No edited image returned from API' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      editedImageUrl: editedImageUrl,
      response: `Image successfully edited based on your request: "${instructions}"`
    });

  } catch (error) {
    console.error('Error processing image:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}