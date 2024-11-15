import { useQuery } from "@tanstack/react-query"

export interface PopularAnimes {
  id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  }
  image: string
  synopsis : string

}
async function getPopularAnimes() {

  const response = await fetch('/api/TrendingAnimes');
  const data = await response.json() || [];

  const new_data = data.map((item:PopularAnimes) => {
    return {
      synopsis: item.synopsis,
      title: item.title,
      image: item.images.jpg.image_url,
    }
  }) as PopularAnimes[]
  return new_data
}

export default function useFetchMovies() {
  const { data = [], error, isLoading } = useQuery<PopularAnimes[]>({

    queryKey: ['popularAnimes'],
    queryFn: getPopularAnimes

  })
  return {data, error, isLoading}
}