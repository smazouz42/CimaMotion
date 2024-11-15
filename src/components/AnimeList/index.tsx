'use client';
import Image from "next/image";
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useFetchMovies from "../hooks/useFetchMovies";
import { MovieCard } from "./AnimeCard";
import { cn } from "@/app/lib/lib";
gsap.registerPlugin(ScrollTrigger)

function MoviesList() {
  const { data: movies, error, isLoading } = useFetchMovies()
  useGSAP(() => {
    const roadMaps = document.querySelectorAll('.movie-card')
    console.log("RoadMaps ", roadMaps);
    roadMaps.forEach((roadMap, index) => {
      const nextIndex = index + 1
      const hasNextImage = nextIndex < roadMaps.length
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: roadMap,
          start: '75% 30%',
          end: '85% 20%',
          scrub: 2,
          toggleActions: 'play none none reverse',
        },
      })
      if (hasNextImage) {
        tl.add(`.image-${index}-start`)
          .to(`.image-${index}`, {
            translateX: '-190%',
            translateY: '-30%',
            rotation: -90,
            markers: true,
            scrub: 2,

            ease: 'power1.out',
          })
          .to(
            `.image-${nextIndex}`,
            {
              scrub: 100,
              scale: 1,
              ease: 'power2.out',

            },
            `.image-${index}-start`,
          )
      }
      gsap.to(roadMap.querySelector('h1'), {
        color: '#fff',
        scrollTrigger: {
          trigger: roadMap,
          start: 'top 40%',
          end: 'bottom 80%',
          scrub: 0.5,
          toggleActions: 'play none none reverse',
        },
      })
      gsap.to(roadMap.querySelector('.progress'), {
        scaleY: 1,
        scrollTrigger: {
          trigger: roadMap,
          start: 'top 40%',
          end: 'bottom 40%',
          scrub: true,
        },
      })
    })

  }, [movies])


  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="h-fit w-full ~py-14/32 flex items-center justify-center bg-black" >
      <div className="flex ~gap-4/8">
        <div className=" sticky top-[15%] w-[300px] xl:w-[350px] h-[500px] xl:h-[500px] hidden md:flex flex-col gap ~gap-32/44  ">
          {movies.map((movie, index) => (
            <div key={movie.id} className={cn("w-full h-full  absolute top-0 right-0  ", { "scale-[40%]": index !== 0 }, `image-${index} `)} style={{
              zIndex: 10 - index
            }}  >
              <Image src={movie.images.jpg.large_image_url} alt="image" width={400} height={400} className="w-full h-full object-cover" />
            </div>
          ))}

        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl text-white">Movies</h1>
          <div className="flex flex-col gap-5">
            {movies.map((movie, index) => (
              <MovieCard key={index} title={movie.title} description={movie.synopsis} img={movie.images.jpg.large_image_url} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );

}

export { MoviesList };