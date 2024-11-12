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

function getMovies() {
  // console.log('fetching movies');
  // const response = await fetch('/api/getMovies');
  // console.log(response.json());
  // return response.json();
  return movies
}
const movies = [
  {
    id: 'ranma-1-2-19335',
    name: 'Ranma 1/2',
    rank: 1,
    img: 'https://img.flawlessfiles.com/_r/1366x768/100/af/1c/af1c058948079aabe09de052cc7b4261/af1c058948079aabe09de052cc7b4261.jpg',
    episodes: { sub: 6, dub: 5 },
    duration: '23m',
    quality: 'HD',
    category: 'TV',
    releasedDay: 'Oct 6, 2024',
    description: "Soun Tendou runs the Tendou Martial Arts School accompanied by his three daughters: Akane, Nabiki, and Kasumi. One day, the sisters' lives are turned upside down when their father announces that he has promised one of them to be married to a fellow martial artist's son in hopes of carrying on the family legacy. In addition to their mixed reactions, when the fiancé arrives, the last thing the Tendou family expects is Ranma Saotome and his father, Genma.  Ranma has been training in China with his father until an unfortunate accident changed them both. Now, when water touches them, Ranma turns into a girl and Genma into a giant panda. Ranma ½ follows Ranma as he attempts to get along with his newly betrothed, the youngest of the Tendou sisters, Akane. As the two begin to attend the same school, they deal with fellow friends and rivals, all of whom have something to say about their engagement."
  },
  {
    id: 'the-elusive-samurai-19233',
    name: 'The Elusive Samurai',
    rank: 2,
    img: 'https://img.flawlessfiles.com/_r/1366x768/100/6b/1b/6b1b090ae52f90441f0e7ed720e86291/6b1b090ae52f90441f0e7ed720e86291.jpg',
    episodes: { eps: 12, sub: 12, dub: 12 },
    duration: '23m',
    quality: 'HD',
    category: 'TV',
    releasedDay: 'Jul 6, 2024',
    description: "Eight-year-old Tokiyuki Houjou, the next successor of the Kamakura shogunate, is a young boy lacking talent in everything besides hide-and-seek. One day, his carefree life is abruptly turned upside down when Takauji Ashikaga brutally seizes power from the Kamakuras, ending their reign. Rescued by a self-proclaimed prophetic priest, Tokiyuki manages to escape with his life. Now he must evade those trying to kill him while recruiting comrades who can help him restore the Kamakura Shogunate to its former glory.  Set during the Nanboku-chou period of Japanese history, is a tale of redemption, documenting the life of the forgotten hero that altered Japan's destiny by running away."
  },
  {
    id: 'no-longer-allowed-in-another-world-19247',
    name: 'No Longer Allowed In Another World',
    rank: 3,
    img: 'https://img.flawlessfiles.com/_r/1366x768/100/1a/37/1a37292bd09836d9fc282e6a79080979/1a37292bd09836d9fc282e6a79080979.jpg',
    episodes: { eps: 12, sub: 12, dub: 12 },
    duration: '23m',
    quality: 'HD',
    category: 'TV',
    releasedDay: 'Jul 9, 2024',
    description: "An adventure in another world with cute girls by your side and video game-like powers—sounds like an anime fan's dream, right? Not so for melancholic author Osamu Dazai, who would quite literally prefer to drop dead. Video games haven't even been invented yet when he gets yanked into another world in 1948. Really, all the fantastical adventure he keeps running into is just getting in the way of his poetic dream of finding the perfect place to die. But no matter how much he risks his hide, everything seems to keep turning out okay. Follow a miserable hero like no other in this cheerfully bleak isekai comedy!"
  },
  {
    id: 'why-does-nobody-remember-me-in-this-world-19240',
    name: 'Why Does Nobody Remember Me in This World?',
    rank: 4,
    img: 'https://img.flawlessfiles.com/_r/1366x768/100/d0/57/d057bc74b98214c7fd9ca6192aa3ce50/d057bc74b98214c7fd9ca6192aa3ce50.jpg',
    episodes: { eps: 12, sub: 12, dub: 12 },
    duration: '24m',
    quality: 'HD',
    category: 'TV',
    releasedDay: 'Jul 13, 2024',
    description: `In a time when the great war between five rival races for supremacy on Earth ended with humanity's victory led by the hero Sid, the world suddenly gets "overwritten" right before the eyes of a boy named Kai. In this rewritten world, Kai witnesses humanity's defeat in the war as a result of Sid's absence—where dragons and demons now rule the land, and Kai himself has become a forgotten existence to all humans. However, after encountering the mysterious girl Rinne, Kai resolves to break free from this rewritten fate. In a world without a hero, he inherits the sword and martial skills of the hero (Sid) and challenges the powerful enemy races that dominate the land.`
  },
  {
    id: 'one-piece-100',
    name: 'One Piece',
    rank: 5,
    img: 'https://img.flawlessfiles.com/_r/1366x768/100/db/86/db8603d2f4fa78e1c42f6cf829030a18/db8603d2f4fa78e1c42f6cf829030a18.jpg',
    episodes: { sub: 1122, dub: 1096 },
    duration: '24m',
    quality: 'HD',
    category: 'TV',
    releasedDay: 'Oct 20, 1999',
    description: 'Gold Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.\n' +
      '\n' +
      "Enter Monkey Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy's reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece."
  },
  {
    id: 'the-strongest-magician-in-the-demon-lords-army-was-a-human-19238',
    name: "The Strongest Magician in the Demon Lord's Army Was a Human",
    rank: 6,
    img: 'https://img.flawlessfiles.com/_r/1366x768/100/1d/12/1d12830ba58fe5e45677b800ff71afe5/1d12830ba58fe5e45677b800ff71afe5.jpg',
    episodes: { sub: 12, dub: 12 },
    duration: '24m',
    quality: 'HD',
    category: 'TV',
    releasedDay: 'Jul 3, 2024',
    description: "Under the tutelage of the great demon warlock Romberg, Ike grew up with knowledge regarding an ancient advanced civilization that once ruled the land. Coupled with his innate talent in magical arts, this upbringing allows Ike to quickly rise in the Demon Lord's army ranks, leading his brigade to consecutive victories against humans.\n" +
      '\n' +
      'However, Ike has a secret—he is a human himself. Despite knowing all too well the consequences if this information is ever to leak, Ike is willing to face such immense danger to achieve his goal: find a way for humans and demons to coexist and stop the war that has been carried on for far too long.'
  },
  {
    id: 'pseudo-harem-19246',
    name: 'Pseudo Harem',
    rank: 7,
    img: 'https://img.flawlessfiles.com/_r/1366x768/100/83/16/8316ad233cd5b69d864064c84f8ca9f5/8316ad233cd5b69d864064c84f8ca9f5.jpg',
    episodes: { sub: 12, dub: 12 },
    duration: '24m',
    quality: 'HD',
    category: 'TV',
    releasedDay: 'Jul 5, 2024',
    description: `Eiji Kitahama, a second year high school student, just wants to be popular. To help him realize this dream, Rin Nanakura, his junior in the drama club, uses her acting skills to create a harem of loving girls for him. Though the various "girls" all show fondness toward Eiji, the affection of the actress behind them is very real. Rin's colorful acting continuously delights Eiji, but will the starlet herself ever make her way into his heart?`
  },
  {
    id: 'demon-slayer-kimetsu-no-yaiba-hashira-training-arc-19107',
    name: 'Demon Slayer: Kimetsu no Yaiba Hashira Training Arc',
    rank: 8,
    img: 'https://img.flawlessfiles.com/_r/1366x768/100/46/d8/46d8e6d3fcd4a016ff5e90f0281eae76/46d8e6d3fcd4a016ff5e90f0281eae76.jpg',
    episodes: { eps: 8, sub: 8, dub: 8 },
    duration: '24m',
    quality: 'HD',
    category: 'TV',
    releasedDay: 'May 12, 2024',
    description: 'Adaptation of the Hashira Training Arc.\n' +
      '\n' +
      "The Hashira, the Demon Slayer Corps' highest ranking swordsmen and members. The Hashira Training has begun in order to face the forthcoming battle against Muzan Kibutsuji. Each with their own thoughts and hopes held in their hearts, a new story for Tanjiro and the Hashira begins."
  },
  {
    id: 'wind-breaker-19136',
    name: 'Wind Breaker',
    rank: 9,
    img: 'https://img.flawlessfiles.com/_r/1366x768/100/b8/b1/b8b1bbc386d81a95c40e236089e11312/b8b1bbc386d81a95c40e236089e11312.jpg',
    episodes: { eps: 13, sub: 13, dub: 13 },
    duration: '23m',
    quality: 'HD',
    category: 'TV',
    releasedDay: 'Apr 5, 2024',
    description: 'From an early age, Haruka Sakura was made an outcast due to his unconventional appearance and lack of social skills. However, the rough treatment turned him into a proficient fighter, which is now the only thing he prides himself on. Starting at Furin High School, where it is rumored that strength is valued over academics, Sakura has only one goal—taking the top spot.\n' +
      '\n' +
      'Involved in a street brawl the day before his enrollment, Sakura happens to meet a group of his future schoolmates. Instead of the usual rejection, they fight alongside him, demonstrating that what the school actually cares about is protecting the town of Makochi from any harm—hence why the students call themselves "Bofurin." Surprised by the support and appreciation of the townspeople, Sakura has a hard time accepting their goodwill.\n' +
      '\n' +
      'Though unfamiliar with kindness being shown to him, Sakura must learn to push past his discomfort when Bofurin is pitted against formidable enemies. After experiencing the feeling of acceptance, he finds himself fighting for the sake of others for the first time.'
  },
  {
    id: 'bleach-806',
    name: 'Bleach',
    rank: 10,
    img: 'https://img.flawlessfiles.com/_r/1366x768/100/58/d0/58d0b99666b285d2c484fec5dfaa23f0/58d0b99666b285d2c484fec5dfaa23f0.jpg',
    episodes: { eps: 366, sub: 366, dub: 366 },
    duration: '24m',
    quality: 'HD',
    category: 'TV',
    releasedDay: 'Oct 5, 2004',
    description: "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant. To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result.\n" +
      '\n' +
      'However, as Rukia is unable to regain her powers, Ichigo is given the daunting task of hunting down the Hollows that plague their town. However, he is not alone in his fight, as he is later joined by his friends—classmates Orihime Inoue, Yasutora Sado, and Uryuu Ishida—who each have their own unique abilities. As Ichigo and his comrades get used to their new duties and support each other on and off the battlefield, the young Soul Reaper soon learns that the Hollows are not the only real threat to the human world.'
  }
]
gsap.registerPlugin(ScrollTrigger)

function MoviesList() {
  const ref = useRef<HTMLDivElement>(null)
  const roadMaps = document.querySelectorAll('.image-1')

  useGSAP(() => {
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

  }, [roadMaps])
  const { data: movies, error, isLoading } = useQuery({
    queryKey: ['movies'],
    queryFn: getMovies

  });

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div ref={ref} className="hamid h-fit w-full py-44 flex items-center justify-center bg-black" >
      <div className="flex gap-10">
        <div className="sticky top-[15%]  w-[400px] h-[450px] flex flex-col gap-5 ">
          <div className="w-full h-full  z-100 absolute top-0 right-0 image-0 ">
            <Image src={movies[0].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-80 absolute top-0 left-0 image-1 scale-[40%]  ">
            <Image src={movies[1].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-70 absolute bottom-0 right-0 image-2 scale-[40%] ">
            <Image src={movies[2].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-60 absolute bottom-0 left-0 image-3 scale-[40%]">
            <Image src={movies[3].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-50 absolute top-0 left-0 image-4 scale-[40%]">
            <Image src={movies[4].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-40 absolute top-0 right-0 image-5 scale-[40%]">
            <Image src={movies[5].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-30 absolute top-0 right-0 image-6 scale-[40%]">
            <Image src={movies[6].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-20 absolute top-0 right-0 image-7 scale-[40%]">
            <Image src={movies[7].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-10 absolute top-0 right-0 image-8 scale-[40%]">
            <Image src={movies[8].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full h-full  z-0 absolute top-0 right-0 image-9 scale-[40%]">
            <Image src={movies[9].img} alt="image" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl text-white">Movies</h1>
          <div className="flex flex-col gap-5">
            {movies.map((movie, index) => (
              <div className="movie-card">
              <div className="max-w-[500px] h-[450px] flex" key={index}>
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
            </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );

}


export { MoviesList };