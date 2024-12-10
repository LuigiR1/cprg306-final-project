import Image from "next/image";

export default async function MovieDetails({ params }) {
  const { id } = params;

  const url = `https://www.omdbapi.com/?i=${id}&apikey=7b8ff5c8`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch movie details: ${response.statusText}`);
  }

  const movie = await response.json();

  if (!movie || movie.Response === "False") {
    return <div>Error: {movie?.Error || "Movie not found"}</div>;
  }

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">{movie.Title}</h1>

      <div className="flex flex-col items-center space-y-6">
        <Image
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={movie.Title}
          width={300}
          height={450}
          className="rounded shadow-lg"
        />

      <div className="border border-gray-300 bg-gray-800 p-6 rounded shadow-lg w-full max-w-2xl text-white">
        <p className="mb-4">
          <strong className="text-blue-400">Plot:</strong> {movie.Plot}
        </p>
        <p className="mb-2">
          <strong className="text-blue-400">Released:</strong> {movie.Released}
        </p>
        <p className="mb-2">
          <strong className="text-blue-400">Genre:</strong> {movie.Genre}
        </p>
        <p className="mb-2">
          <strong className="text-blue-400">Director:</strong> {movie.Director}
        </p>
        <p>
          <strong className="text-blue-400">Actors:</strong> {movie.Actors}
        </p>
        </div>
      </div>
    </div>
  );
}
