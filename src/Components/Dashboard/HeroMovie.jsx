import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { url } from "../../Requests/request,js";
import HeroMovieContent from "./HeroMovieContent";

const HeroMovie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies?.length)];
  useEffect(() => {
    setIsLoading(true);
    const fetching = async () => {
      try {
        const result = await axios.get(url.requestTopRated);
        setMovies(
          result.data.results.filter(
            (movie) =>
              movie.backdrop_path !== null &&
              movie.poster_path !== null &&
              movie.overview !== "" &&
              movie.original_language === "en"
          )
        );
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetching();
  }, []);
  return (
    <div className="relative h-screen mb-8">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black"></div>
      {isLoading ? (
        <div className="sm:h-[75vh] h-screen bg-black"></div>
      ) : (
        <img
          src={
            movie?.backdrop_path &&
            `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
          }
          className="object-cover w-full h-full object-center"
          loading="lazy"
        />
      )}
      <HeroMovieContent movie={movie} isLoading={isLoading} />
    </div>
  );
};

export default HeroMovie;
