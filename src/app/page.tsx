'use client'
import { MoviesList } from "./components/MoviesList"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

export default function Home() {

  return (
    <QueryClientProvider client={queryClient}>
      <MoviesList />
    </QueryClientProvider>
  )
}
