'use client';
import Image from "next/image";
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis, useLenis } from 'lenis/react'
import { MovieCard } from "../MovieCard";
import { useQuery } from '@tanstack/react-query'
import { useRef } from "react";
import { cn } from "@/app/lib/lib";
import useFetchMovies from "../hooks/useFetchMovies";
gsap.registerPlugin(ScrollTrigger)

function MoviesList() {
  const {data: movies, error, isLoading } = useFetchMovies()
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
          opacity : 0,
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
    <div className="hamid h-fit w-full py-44 flex items-center justify-center bg-black" >
      <div className="flex gap-10">
        <div className="sticky top-[15%]  w-[400px] h-[500px] flex flex-col  ">
          <div className="w-full h-full  z-[10] absolute top-0 right-0 image-0 ">
            <Image src={movies[0].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-[9] absolute top-0 left-0 image-1 scale-[40%]  ">
            <Image src={movies[1].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-[7] absolute bottom-0 right-0 image-2 scale-[40%] ">
            <Image src={movies[2].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-[6] absolute bottom-0 left-0 image-3 scale-[40%]">
            <Image src={movies[3].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-[5] absolute top-0 left-0 image-4 scale-[40%]">
            <Image src={movies[4].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-[4] absolute top-0 right-0 image-5 scale-[40%]">
            <Image src={movies[5].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-[3] absolute top-0 right-0 image-6 scale-[40%]">
            <Image src={movies[6].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-[2] absolute top-0 right-0 image-7 scale-[40%]">
            <Image src={movies[7].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-[1] absolute top-0 right-0 image-8 scale-[40%]">
            <Image src={movies[8].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-[0] absolute top-0 right-0 image-9 scale-[40%]">
            <Image src={movies[9].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl text-white">Movies</h1>
          <div className="flex flex-col gap-5">
            {movies.map((movie, index) => (
              <div className="max-w-[500px] h-[450px] flex movie-card" key={index}>
                <div className="flex gap-10">
                  <div className="relative w-1 flex h-full">
                    <div className="absolute inset-0 bg-white rounded progress scale-y-0 origin-top"></div>
                    <div className="relative w-1 h-full rounded bg-white/15 progress"></div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-4xl">{movie.name}</h1>
                    <p className="text-lg text-gray-500">1900</p>
                    <p className="text-xl text-gray-500 line-clamp-4">{movie.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );

}


export { MoviesList };