'use client';
import Image from "next/image";
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis, useLenis } from 'lenis/react'

gsap.registerPlugin(ScrollTrigger)
export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
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
          start: '85% 40%',
          end: 'bottom 10%',
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
        color: '#C86661',
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
  return (
    <ReactLenis root options={{ autoRaf: true }}>
      <div className="h-[200vw] flex items-center justify-center">
        <div className="flex gap-10">
          <div className="sticky top-0  w-[400px] h-[300px] flex flex-col gap-5 " id="movie-card">
            <div className="w-[400px] h-[300px]  z-50 absolute top-0 right-0 image-0 ">
              <Image src="/deathNote.jpg" alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="w-[400px] h-[300px]  z-40 absolute top-0 left-0 image-1 scale-[40%]  ">
              <Image src="/deathNote.jpg" alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="w-[400px] h-[300px]  z-30 absolute bottom-0 right-0 image-2 scale-[40%] ">
              <Image src="/deathNote.jpg" alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="w-[400px] h-[300px]  z-20 absolute bottom-0 left-0 image-3 scale-[40%]">
              <Image src="/deathNote.jpg" alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="w-[400px] h-[300px]  z-10 absolute top-0 left-0 image-4 scale-[40%]">
              <Image src="/deathNote.jpg" alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="w-[400px] h-[300px]  z-0 absolute top-0 right-0 image-5 scale-[40%]">
              <Image src="/deathNote.jpg" alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
            </div>

          </div>

          <div className="flex flex-col gap-5 ">

            <div className="w-[400px] h-[300px] flex  movie-card ">
              <div className="flex gap-10">
                <div className="relative  w-1 flex h-full">
                  <div className="absolute inset-0 bg-white rounded progress scale-y-0 origin-top"></div>
                  <div className="relative w-1 h-full rounded bg-white/15 progress"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl">deathNote</h1>
                  <p className="text-sm text-gray-500"> 2007 </p>
                  <p className="text-md text-gray-500"> death note is a manga series that appear in anime at the 2007 summer anime festival the main character is light yagami a very smart person who is obsessed with killing people</p>
                </div>

              </div>
            </div>
            <div className="w-[400px] h-[300px] flex  movie-card ">
              <div className="flex gap-10">
                <div className="relative  w-1 flex h-full">
                  <div className="absolute inset-0 bg-white rounded progress scale-y-0 origin-top"></div>
                  <div className="relative w-1 h-full rounded bg-white/15 progress"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl">deathNote</h1>
                  <p className="text-sm text-gray-500"> 2007 </p>
                  <p className="text-md text-gray-500"> death note is a manga series that appear in anime at the 2007 summer anime festival the main character is light yagami a very smart person who is obsessed with killing people</p>
                </div>

              </div>
            </div>
            <div className="w-[400px] h-[300px] flex  movie-card ">
              <div className="flex gap-10">
                <div className="relative  w-1 flex h-full">
                  <div className="absolute inset-0 bg-white rounded progress scale-y-0 origin-top"></div>
                  <div className="relative w-1 h-full rounded bg-white/15 progress"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl">deathNote</h1>
                  <p className="text-sm text-gray-500"> 2007 </p>
                  <p className="text-md text-gray-500"> death note is a manga series that appear in anime at the 2007 summer anime festival the main character is light yagami a very smart person who is obsessed with killing people</p>
                </div>

              </div>
            </div>
            <div className="w-[400px] h-[300px] flex  movie-card ">
              <div className="flex gap-10">
                <div className="relative  w-1 flex h-full">
                  <div className="absolute inset-0 bg-white rounded progress scale-y-0 origin-top"></div>
                  <div className="relative w-1 h-full rounded bg-white/15 progress"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl">deathNote</h1>
                  <p className="text-sm text-gray-500"> 2007 </p>
                  <p className="text-md text-gray-500"> death note is a manga series that appear in anime at the 2007 summer anime festival the main character is light yagami a very smart person who is obsessed with killing people</p>
                </div>

              </div>
            </div>
            <div className="w-[400px] h-[300px] flex  movie-card ">
              <div className="flex gap-10">
                <div className="relative  w-1 flex h-full">
                  <div className="absolute inset-0 bg-white rounded progress scale-y-0 origin-top"></div>
                  <div className="relative w-1 h-full rounded bg-white/15 progress"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl">deathNote</h1>
                  <p className="text-sm text-gray-500"> 2007 </p>
                  <p className="text-md text-gray-500"> death note is a manga series that appear in anime at the 2007 summer anime festival the main character is light yagami a very smart person who is obsessed with killing people</p>
                </div>

              </div>
            </div>
            <div className="w-[400px] h-[300px] flex  movie-card ">
              <div className="flex gap-10">
                <div className="relative  w-1 flex h-full">
                  <div className="absolute inset-0 bg-white rounded progress scale-y-0 origin-top"></div>
                  <div className="relative w-1 h-full rounded bg-white/15 progress"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl">deathNote</h1>
                  <p className="text-sm text-gray-500"> 2007 </p>
                  <p className="text-md text-gray-500"> death note is a manga series that appear in anime at the 2007 summer anime festival the main character is light yagami a very smart person who is obsessed with killing people</p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </ReactLenis>
  );
}
