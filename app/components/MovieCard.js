"use client";

import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card border rounded p-4 text-center">
      <img src={movie.Poster} alt={movie.Title} className="mb-2" />
      <h3 className="text-lg font-bold">{movie.Title}</h3>
      <p>{movie.Year}</p>
      <Link href={`/movies/${movie.imdbID}`} className="text-blue-300 underline">
        Details
      </Link>
    </div>
  );
}
