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
    <div>
      <h1 className="text-2xl font-bold">{movie.Title}</h1>
      <Image
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={movie.Title}
        width={300}
        height={450}
        className="mb-4"
      />
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Released:</strong> {movie.Released}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
    </div>
  );
}

