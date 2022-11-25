import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { auth } from "../../Firebase/firebase";
import Movie from "./Movie";
import MovieTrailer from "./MovieTrailer";

const ScrollData = ({ category, url }) => {
  const scrollbar = useRef();
  const [data, setData] = useState([]);
  const [trailerId, setTrailerId] = useState("");
  const [user] = useAuthState(auth);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchTrending = async () => {
      const result = await axios.get(url);
      setData(
        result.data.results.filter(
          (movie) =>
            movie.original_language != "ko" && movie.poster_path != null
        )
      );
    };
    fetchTrending();
  }, []);

  const scrollLeft = () => {
    scrollbar.current.scrollLeft -= scrollbar.current.offsetWidth;
  };
  const scrollRight = () => {
    scrollbar.current.scrollLeft += scrollbar.current.offsetWidth;
  };

  return (
    <>
      <div className="relative">
        <h1 className="px-4 mt-4 text-xl font-bold text-white sm:text-2xl">
          {category}
        </h1>
        <div
          onClick={scrollLeft}
          className="absolute z-10 hidden p-1 transform -translate-y-1/2 bg-gray-100 rounded-full cursor-pointer top-1/2 left-4 sm:block"
        >
          <AiOutlineArrowLeft className="w-8 h-8 text-black" />
        </div>
        <div
          ref={scrollbar}
          className="flex w-full px-4 py-6 -space-x-6 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {data?.map((movie, i) => (
            <Movie
              movie={movie}
              key={i}
              user={user}
              setTrailerId={setTrailerId}
              setShowTrailer={setShowTrailer}
              showTrailer={showTrailer}
            />
          ))}
        </div>
        <div
          onClick={scrollRight}
          className="absolute z-10 hidden p-1 transform -translate-y-1/2 bg-gray-100 rounded-full cursor-pointer right-4 top-1/2 sm:block"
        >
          <AiOutlineArrowRight className="w-8 h-8 text-black" />
        </div>
      </div>
      <MovieTrailer
        trailerId={trailerId}
        setTrailerId={setTrailerId}
        showTrailer={showTrailer}
        setShowTrailer={setShowTrailer}
      />
    </>
  );
};

export default ScrollData;
