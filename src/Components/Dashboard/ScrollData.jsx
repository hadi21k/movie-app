import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import YouTube from "react-youtube";
import { auth } from "../../Firebase/firebase";
import Movie from "./Movie";

const ScrollData = ({ category, url }) => {
  const scrollbar = useRef();
  const [data, setData] = useState([]);
  const [trailerId, setTrailerId] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);
  const [user] = useAuthState(auth);

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

  const opts = {
    height: "100%",
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
    <>
      <div className="relative">
        <h1 className="px-4 mt-4 text-xl font-bold text-white sm:text-2xl">
          {category}
        </h1>
        <div
          onClick={scrollLeft}
          className="absolute z-40 hidden p-1 transform -translate-y-1/2 bg-gray-100 rounded-full cursor-pointer top-1/2 left-4 sm:block"
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
          className="absolute z-40 hidden p-1 transform -translate-y-1/2 bg-gray-100 rounded-full cursor-pointer right-4 top-1/2 sm:block"
        >
          <AiOutlineArrowRight className="w-8 h-8 text-black" />
        </div>
      </div>
      <AnimatePresence exit initial={false}>
        {showTrailer && (
          <motion.div
            key={showTrailer}
            initial={{ opacity: 0, bottom: -500 }}
            animate={{ opacity: 1, bottom: 0 }}
            exit={{ opacity: 0, bottom: -500 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "linear" }}
            className="bg-black fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center"
          >
            <motion.div
              key={showTrailer}
              initial={{ opacity: 0, top: 500 }}
              animate={{ opacity: 1, top: 0 }}
              exit={{ opacity: 0, bottom: 500 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "linear" }}
              onClick={() => {
                setShowTrailer(false);
                setTrailerId("");
              }}
              className="absolute w-[40px] h-[40px] right-0 bg-[#d62560] grid place-items-center cursor-pointer text-2xl text-white rounded-l-lg z-50"
            >
              x
            </motion.div>
            <YouTube
              className="h-[50vh] md:h-[500px] w-[100%]"
              videoId={trailerId ? trailerId : ""}
              opts={opts}
              onReady={() => setShowTrailer(true)}
              onEnd={onEnd}
              loading="lazy"
              onError={() => setShowTrailer(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollData;
