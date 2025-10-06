const API_KEY = "2545d594"; // Replace with your actual OMDB key
const BASE_URL = "https://www.omdbapi.com/";

export interface MovieSearchResult {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  imdbRating?: string;
}

export interface MovieDetails {
  Title: string;
  Plot: string;
  Actors: string;
  Genre: string;
  Runtime: string;
  imdbID: string;
  Poster: string;
  Year: string;
  imdbRating?: string;
}

interface OMDBResponse {
  Search: MovieSearchResult[];
  totalResults: string;
  Response: string;
  Error?: string;
}

// Fetch movies from OMDB API by search term
export async function fetchMovies(searchTerm: string): Promise<MovieSearchResult[]> {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}&type=movie`;
  const response = await fetch(url);
  const data: OMDBResponse = await response.json();

  if (data.Response === "True") {
    return data.Search;
  } else {
    throw new Error(data.Error || "Failed to fetch movies");
  }
}

export async function fetchMovieDetails(imdbID: string): Promise<MovieDetails> {
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`;
  const response = await fetch(url);
  const data = await response.json();

  if (data.Response === "True") {
    return data;
  } else {
    throw new Error(data.Error || "Failed to fetch movie details");
  }
}