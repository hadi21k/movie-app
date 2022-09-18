import axios from "axios";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BsBookmarkPlus, BsPlayFill } from "react-icons/bs";
import { auth, db } from "../Firebase/firebase";
import { key } from "../Requests/request,js";

const SearchResult = ({ movie, setTrailerId, setShowTrailer, videoRef }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const user = auth.currentUser;
  const addToList = async () => {
    setIsBookmarked(true);
    if (user) {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(
        userRef,
        {
          list: arrayUnion(movie),
        },
        { merge: true }
      );
    } else {
      alert("Please login to add to list");
    }
  };

  const removeFromList = () => {
    setIsBookmarked(false);
    if (user) {
      const userRef = doc(db, "users", user.uid);
      updateDoc(
        userRef,
        {
          list: arrayRemove(movie),
        },
        { merge: true }
      );
    }
  };

  const playTrailer = async () => {
    if (movie.media_type === "movie") {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${key}&language=en-US`
      );
      if (res.data.results.length > 0) {
        setTrailerId(
          res.data.results.filter((video) => video.type === "Trailer")[0]?.key
        );
      }
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/${movie.id}/videos?api_key=${key}&language=en-US`
      );
      if (res.data.results.length > 0) {
        setTrailerId(
          res.data.results.filter((video) => video.type === "Trailer")[0]?.key
        );
      }
    }
    setShowTrailer(true);
    videoRef.current && videoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, ease: "linear", duration: 0.5 }}
      viewport={{ once: true }}
      className="relative transition-all duration-300 cursor-pointer group"
    >
      <img
        src={
          movie?.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
            : ""
        }
        className="object-cover w-full h-full text-white rounded"
        loading="lazy"
      />
      <div className="absolute top-0 grid w-full h-full p-4 text-lg font-bold text-center text-white transition duration-200 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 backdrop-filter backdrop-blur-md place-items-center">
        {movie.original_title ? movie.original_title : movie.original_name}
      </div>
      <AnimatePresence wait initial={false}>
        <div
          key={isBookmarked}
          className="absolute bottom-[-20px] flex space-x-2 overflow-y-hidden pl-4"
        >
          <div
            onClick={playTrailer}
            className="p-2 bg-white rounded-full cursor-pointer"
          >
            <BsPlayFill className="w-6 h-6 text-black" />
          </div>
          {isBookmarked ? (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ ease: "linear", duration: 0.2 }}
              onClick={removeFromList}
              className="p-2 bg-white rounded-full cursor-pointer"
            >
              <AiOutlineCheck className="w-6 h-6 text-black" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ ease: "linear", duration: 0.2 }}
              onClick={addToList}
              className="p-2 bg-white rounded-full cursor-pointer"
            >
              <BsBookmarkPlus className="w-6 h-6 text-black" />
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default SearchResult;
