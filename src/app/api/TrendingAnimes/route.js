
export async function GET() {
  
  try {
    const response = await fetch('https://api.jikan.moe/v4/top/anime');

    if (!response.ok) {

      return Response.json({ message: 'Failed to fetch movies' }, { status: response.status });
    }

    const data = await response.json();
    return Response.json(animes);
  } catch (error) {
          console.log("al2omor ma taiba");

    return Response.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}