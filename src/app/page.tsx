'use client'
import { useEffect, useRef } from "react";
import { HomePage } from "../components/HomePage";
import { MoviesList } from "../components/PopularAnimes"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Lenis from "lenis";
import SpringAnime from "../components/SpringAnimes";


const queryClient = new QueryClient()

export default function Home() {

  const animationRequestRef = useRef<number>()

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      animationRequestRef.current = requestAnimationFrame(raf)
    }

    animationRequestRef.current = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationRequestRef.current!)
      lenis.destroy()
    }
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
      <MoviesList />
      <SpringAnime />
    </QueryClientProvider>
  )
}
