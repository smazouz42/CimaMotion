import Image from "next/image";

interface MovieCardProps {
  title: string;
  description: string;
  img: string;
}
function MovieCard({ title, description , img}: MovieCardProps) {
  return (
    <div className="lg:max-w-[500px] max-w-[400px] md:h-[450px] h-fit flex movie-card">
      <div className="flex gap-10">
        <div className="relative w-1 flex h-full">
          <div className="absolute inset-0 bg-white rounded progress scale-y-0 origin-top"></div>
          <div className="relative w-1 h-full rounded bg-white/15 progress"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl text-gray-500">{title}</h1>
            <div className="hidden md:flex">
              <p className=" text-xl text-gray-500 line-clamp-3 ">{description}</p>
            </div>
          </div>
          <Image src={img} alt="image" width={281} height={400} className="md:hidden" />
        </div>
      </div>
    </div>
  );
}

export { MovieCard };