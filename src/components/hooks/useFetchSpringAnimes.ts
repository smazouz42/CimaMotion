import { useQuery } from "@tanstack/react-query"

export interface SpringAnime {
  id: number;
  title: string;
  images: {
    jpg: {
      large_image_url: string;
    };
  }
  image?: string
  synopsis : string

}
async function SpringAnimes() {
  const response = await fetch('/api/SpringAnimes');
  const data = await response.json() || [];

  const new_data = data.map((item:SpringAnime ) => {
    return {
      synopsis: item.synopsis,
      title: item.title,
      image: item.images.jpg.large_image_url,
    }
  }) as SpringAnime[]
  return new_data
}

export default function useFetchMovies() {
  const { data = [], error, isLoading } = useQuery({
    queryKey: ['SpringAnimes'],
    queryFn: SpringAnimes

  })

  return {data, error, isLoading}
}