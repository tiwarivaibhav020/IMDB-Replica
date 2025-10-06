import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieModal from "./components/MovieModal";
import { fetchMovies, fetchMovieDetails } from "./services/omdbApi";
import type { MovieSearchResult, MovieDetails } from "./services/omdbApi";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("batman");
  const [movies, setMovies] = useState<MovieSearchResult[]>([]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);
  const [loadingModal, setLoadingModal] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setMovies([]);
      return;
    }
    const timer = setTimeout(() => {
      fetchMovies(searchTerm)
        .then(setMovies)
        .catch(() => setMovies([]));
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Open modal and fetch movie details by IMDb ID
  const openModal = async (imdbID: string) => {
    setLoadingModal(true);
    try {
      const details = await fetchMovieDetails(imdbID);
      setSelectedMovie(details);
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
      alert("Failed to load movie details.");
    } finally {
      setLoadingModal(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Header />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main style={{ padding: "0rem", minHeight: "60vh", width: "90%", margin: "0 auto" }}>
        <MovieList movies={movies} onMovieClick={openModal} />
      </main>

      {loadingModal && (
        <p style={{ textAlign: "center", fontStyle: "italic" }}>
          Loading movie details...
        </p>
      )}

      {selectedMovie && (
        <MovieModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedMovie.Title}
          plot={selectedMovie.Plot}
          actors={selectedMovie.Actors}
          genre={selectedMovie.Genre}
          runtime={selectedMovie.Runtime}
          posterUrl={selectedMovie.Poster}
        />
      )}
    </div>
  );
};

export default App;