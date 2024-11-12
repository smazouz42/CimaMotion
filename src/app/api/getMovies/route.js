import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://api-anime-.vercel.app/');

    if (!response.ok) {
      return NextResponse.json({ message: 'Failed to fetch movies' }, { status: response.status });
    }

    const data = await response.json();
    console.log(data.spotLightAnimes);
    return NextResponse.json(data.spotLightAnimes);
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}