"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Profile() {
  const user = {
    name: "John Doe",
    favorites: [
      { title: "Inception", comment: "A mind-bending masterpiece!" },
      { title: "The Matrix", comment: "Sci-fi at its best." },
      { title: "The Godfather", comment: "A cinematic classic." },
    ],
  };

  const [favoriteMovies, setFavoriteMovies] = useState([]);


  useEffect(() => {
    const fetchFavorites = async () => {
      const apiKey = "7b8ff5c8"; 
      const fetchedMovies = [];

      for (const favorite of user.favorites) {
        try {
          const response = await fetch(
            `https://www.omdbapi.com/?t=${encodeURIComponent(
              favorite.title
            )}&apikey=${apiKey}`
          );
          const data = await response.json();

          if (data.Response === "True") {
            fetchedMovies.push({
              title: data.Title,
              poster: data.Poster !== "N/A" ? data.Poster : "/placeholder.png",
              comment: favorite.comment, 
            });
          } else {
            console.error(`Error fetching ${favorite.title}: ${data.Error}`);
          }
        } catch (error) {
          console.error(`Error fetching ${favorite.title}: ${error.message}`);
        }
      }

      setFavoriteMovies(fetchedMovies);
    };

    fetchFavorites();
  }, []);

  return (
    <div className="p-8 bg-gray-800 min-h-screen rounded">
      <h1 className="text-4xl font-bold text-blue-300 underline mb-4">
        {user.name}&apos;s Profile
      </h1>

      <section>
        <h2 className="text-2xl text-white font-semibold mb-4">Favorite Movies</h2>
        <ul className="space-y-4">
          {favoriteMovies.map((movie, index) => (
            <li
              key={index}
              className="flex items-start p-4 bg-white border border-gray-300 rounded shadow"
            >
              <Image
                src={movie.poster}
                alt={movie.title}
                width={50}
                height={75}
                className="rounded"
              />
              <div className="ml-4">
                <p className="text-gray-800 text-lg font-bold">
                  {movie.title}
                </p>
                <p className="text-gray-600 italic">{movie.comment}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
