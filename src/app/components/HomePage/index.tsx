import Image from "next/image";

const HomePage = () => {
  return (
    <div className="relative w-screen h-screen bg-black">
      <Image
        src="/background.jpeg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="opacity-30"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col gap-4 w-full items-center">
        <h1 className="text-9xl max-w-6xl border-b-4 pb-4">Welcome to AnyTube</h1>
        <p className="text-2xl max-w-2xl">
          This website provides you with the most popular animes in the world at the moment.
        </p>
      </div>
    </div>
  );
};

export { HomePage };
