import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import SearchResult from "../Components/SearchResult";
import useInput from "../Hooks/useInput";
import { key } from "../Requests/request,js";

const Search = () => {
  const videoRef = useRef(null);
  const [search, setSearch, onSearchChange] = useInput();
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerId, setTrailerId] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      const fetchSearch = async () => {
        const result = await axios.get(
          search
            ? `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${search}&page=1&include_adult=false`
            : `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=""&page=1&include_adult=false`
        );
        setData(
          result.data.results.filter(
            (movie) => movie.poster_path != null || movie.backdrop_path != null
          )
        );
      };
      fetchSearch();
    } catch (e) {
      console.error(e.code);
    }
  }, [search]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const onEnd = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowTrailer(false);
    setTrailerId("");
  };

  return (
    <div className="pt-[80px] bg-black min-h-screen scroll-smooth">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ ease: "linear", duration: 0.5, delay: 0.1 }}
        >
          <input
            value={search}
            onChange={onSearchChange}
            type="text"
            placeholder="Search for your movie"
            className="w-full mt-4 text-lg input placeholder:text-lg"
          />
        </motion.div>
        {search.length != 0 && showTrailer && (
          <div ref={videoRef} className="mt-4">
            <YouTube
              videoId={trailerId ? trailerId : ""}
              opts={opts}
              onReady={() => setShowTrailer(true)}
              onEnd={onEnd}
              loading="lazy"
              onError={() => setShowTrailer(false)}
            />
          </div>
        )}
        {search != 0 ? (
          data.length > 0 ? (
            <div className="grid grid-cols-1 gap-10 py-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {data.map((movie, i) => (
                <SearchResult
                  movie={movie}
                  key={i}
                  setShowTrailer={setShowTrailer}
                  setTrailerId={setTrailerId}
                  videoRef={videoRef}
                />
              ))}
            </div>
          ) : (
            <div className="grid h-full mt-4 text-white place-items-center">
              <h1 className="text-2xl font-semibold">No movies found</h1>
            </div>
          )
        ) : (
          <div className="grid h-full mt-4 text-white place-items-center">
            <h1 className="text-2xl font-semibold">Search for a movie</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
