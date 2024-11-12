'use client'
import { HomePage } from "./components/HomePage";
import { MoviesList } from "./components/MoviesList"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

export default function Home() {

  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
      <MoviesList />
    </QueryClientProvider>
  )
}
