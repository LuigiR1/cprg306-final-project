"use client";

import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (query) => {
    try {
      const url = `https://www.omdbapi.com/?s=${query}&apikey=7b8ff5c8`;
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`HTTP Error: ${response.statusText}`);
        return;
      }

      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        console.error(`API Error: ${data.Error}`);
        setMovies([]);
      }
    } catch (error) {
      console.error(`Fetch Error: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchMovies("action");
  }, []);

  return (
    <div>
      <SearchBar onSearch={(query) => fetchMovies(query)} />
      <h2 className="text-xl font-semibold mt-4">Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
}
