import Image from "next/image";
import  useFetchTopAnimes  from "../hooks/useFetchSpringAnimes"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TopAnimes = () => {
  const { data: movies, error, isLoading } = useFetchTopAnimes()
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current && movies) {
      const cards = containerRef.current.querySelectorAll(".movie-card");

      cards.forEach((card, index) => {
        const direction = index % 2 === 0 ? "100px" : "-100px";
        gsap.fromTo(
          card,
          { x: direction, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 50%",
            },
          }
        );
      });
    }
  }, [movies]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!movies || movies.length === 0) return <p>No movies found.</p>;

  return (
    <div ref={containerRef} className="flex flex-col gap-10 bg-black" >
      <h1 className="~text-4xl/5xl text-white text-center w-full line-clamp-1  ">
        Top 10 Animes This Week
      </h1>
      <div ref={containerRef} className="flex flex-wrap justify-center ~gap-10/20">
        {movies.map((movie: any) => (
          <div key={movie.id} className="movie-card">
            <div className="w-[281px] h-[400px] overflow-hidden p">
              <h1 className="text-2xl text-white w-full  line-clamp-1 my-2">
                {movie.title}
              </h1>
              <Image
                src={movie.images.jpg.large_image_url}
                alt={movie.title}
                width={283}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAnimes;