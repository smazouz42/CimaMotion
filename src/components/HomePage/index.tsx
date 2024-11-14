import Image from "next/image";

const HomePage = () => {
  return (
    <div className="relative w-full aspect-[1.7778] bg-black overflow-hidden">
      <Image
        src="/background.jpeg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="opacity-30 border border-red-500"
      />

      <nav className="absolute top-0 left-0 w-full bg-black bg-opacity-70 text-white px-8 py-4 flex justify-between items-center z-10">
        <div className="text-2xl font-bold">AnyTube</div>
      </nav>

      <div
        className="absolute top-0 left-0 w-full h-32 bg-black"
        style={{
          clipPath: "ellipse(100% 50% at 50% 0%)",
        }}
      ></div>

      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-black"
        style={{
          clipPath: "ellipse(100% 50% at 50% 100%)",
        }}
      ></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col gap-4 w-full items-center">
        <h1 className="~text-4xl/9xl ~max-w-2xl/7xl border-b-4 pb-4">Welcome to AnyTube</h1>
        <p className="~text-lg/2xl ~max-w-lg/2xl">
          This website provides you with the most popular animes in the world at the moment.
        </p>
      </div>
    </div>
  );
};

export { HomePage };
