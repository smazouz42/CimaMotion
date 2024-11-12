'use client';
import Image from "next/image";
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis, useLenis } from 'lenis/react'
import { MovieCard } from "../MovieCard";
import { useQuery } from '@tanstack/react-query'

async function getMovies() {
  console.log('fetching movies');
  const response = await fetch('/api/getMovies');
  console.log(response.json());
  return response.json();
}
gsap.registerPlugin(ScrollTrigger)

function MoviesList() {

const lenis = useLenis(({ scroll }) => {
  
})

useGSAP(() => {

  const roadMaps = document.querySelectorAll('.movie-card')
  roadMaps.forEach((roadMap, index) => {
    console.log(roadMap)
    const nextIndex = index + 1
    console.log(nextIndex)
    const hasNextImage = nextIndex < roadMaps.length
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: roadMap,
        start: '75% 30%',
        end: '85% 20%',
        scrub: 2,
        markers: true,


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

}, [])
const { data: movies, error, isLoading } = useQuery({
  queryKey: ['movies'],
  queryFn: getMovies

});
return (
  <ReactLenis root options={{ autoRaf: true }}>
    <div className="h-fit w-full py-44 flex items-center justify-center bg-black" >
      <div className="flex gap-10">
        <div className="sticky top-[15%]  w-[400px] h-[450px] flex flex-col gap-5 " id="movie-card">
          <div className="w-full h-full  z-50 absolute top-0 right-0 image-0 ">
            <Image src="/deathNote.jpg" alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-40 absolute top-0 left-0 image-1 scale-[40%]  ">
            <Image src="/attack.jpg" alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-30 absolute bottom-0 right-0 image-2 scale-[40%] ">
            <Image src="/demon.jpg" alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-20 absolute bottom-0 left-0 image-3 scale-[40%]">
            <Image src="/one-peace.jpg" alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-10 absolute top-0 left-0 image-4 scale-[40%]">
            <Image src="/Saga.jpg" alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-0 absolute top-0 right-0 image-5 scale-[40%]">
            <Image src="/deathNote.jpg" alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>

        </div>
        {/* <div className="flex flex-col gap-4">
            <h1 className="text-7xl text-white">Movies</h1>
            <div className="flex flex-col gap-5">
              {movies.map((movie, index) => (
                <MovieCard
                  key={index}
                  title={movie.name}
                  year="1999"
                  description={movie.descriptions}
                />
              ))}
            </div>
          </div> */}

      </div>
    </div>
  </ReactLenis>
);

}


export { MoviesList };