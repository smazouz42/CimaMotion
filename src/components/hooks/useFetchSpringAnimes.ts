import { useQuery } from "@tanstack/react-query"


async function getMovies() {
  console.log('fetching movies');
  const response = await fetch('/api/TrendingAnimes');
  const data = await response.json();
  return data
}

export default function useFetchMovies() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['movies'],
    queryFn: getMovies

  })

  return {data, error, isLoading}
}