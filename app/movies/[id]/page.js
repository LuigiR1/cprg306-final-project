export default async function MovieDetails({ params }) {
  const { id } = params; // Directly destructure the `id` from `params`

  // Log params to debug any issues
  console.log("Params:", params);

  // Fetch movie details using the `id`
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
      <img src={movie.Poster} alt={movie.Title} className="mb-4" />
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Released:</strong> {movie.Released}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
    </div>
  );
}
