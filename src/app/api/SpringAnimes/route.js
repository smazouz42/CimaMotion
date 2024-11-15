
export async function GET() {
  try {
    console.log("al2omor chibh");
    const response = await fetch('https://api.jikan.moe/v4/seasons/2024/spring');

    if (!response.ok) {
      console.log("al2omor mavfdfd taiba");

      return Response.json({ message: 'Failed to fetch movies' }, { status: response.status });
    }

    const data = await response.json();
    const animes = data.trendingAnimes.slice(0, 10);
    console.log("al2omor taiba");
    return Response.json(animes);
  } catch (error) {
      console.log("al2omor ma taiba");

    return Response.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}