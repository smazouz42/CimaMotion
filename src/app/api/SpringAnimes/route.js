
export async function GET() {
  try {
    const response = await fetch('https://api.jikan.moe/v4/seasons/2024/spring');

    if (!response.ok) {

      return Response.json({ message: 'Failed to fetch movies' }, { status: response.status });
    }

    const data = await response.json();
    const animes = data.data.slice(0, 10);
    return Response.json(animes);
  } catch (error) {

    return Response.json({ message: error.message }, { status: 500 });
  }
}