
interface MovieCardProps {
  title: string;
  year: string;
  description: string;
}
function MovieCard({ title, description }: MovieCardProps) {
  return (
    <div className="max-w-[500px] h-[450px] flex movie-card">
      <div className="flex gap-10">
        <div className="relative w-1 flex h-full">
          <div className="absolute inset-0 bg-white rounded progress scale-y-0 origin-top"></div>
          <div className="relative w-1 h-full rounded bg-white/15 progress"></div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl">{title}</h1>
          <p className="text-xl text-gray-500 line-clamp-4">{description}</p>
        </div>
      </div>
    </div>
  );
}

export { MovieCard };