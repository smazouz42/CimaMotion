
export async function GET() {
  
  try {
    const response = await fetch('https://api.jikan.moe/v4/top/anime');

    if (!response.ok) {

      return Response.json({ message: 'Failed to fetch movies' }, { status: response.status });
    }

    const rep = await response.json();
    const animes = rep.data.slice(0, 10);
    return Response.json(animes);
  } catch (error) {

    return Response.json({ message: error.message }, { status: 500 });
  }
}