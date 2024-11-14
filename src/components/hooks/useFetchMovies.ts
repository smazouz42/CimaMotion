import { useQuery } from "@tanstack/react-query"
import {movies} from "@/app/constant/movies"


async function getMovies() {
  // console.log('fetching movies');
  // const response = await fetch('/api/getMovies');
  // console.log(response.json());
  // return response.json();
  return movies
}

export default function useFetchMovies() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['movies'],
    queryFn: getMovies

  })

  return {data, error, isLoading}
}