// src/components/MovieList.tsx
import React from "react";
import MovieCard from "./MovieCard";
import type { MovieSearchResult } from "../services/omdbApi";

interface MovieListProps {
  movies: MovieSearchResult[];
  onMovieClick: (imdbID: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies,onMovieClick  }) => {
  if (movies.length === 0) {
    return <p style={{ textAlign: "center" }}>No movies found.</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "1rem",
        marginTop: "1rem",
        width: "100%",
      }}
    >
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          posterUrl={movie.Poster}
          onClick={() => onMovieClick(movie.imdbID)}
        />
      ))}
    </div>
  );
};

export default MovieList;