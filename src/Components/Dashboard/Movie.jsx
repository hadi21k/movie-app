import axios from "axios";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BsBookmarkPlus, BsPlayFill } from "react-icons/bs";
import { db } from "../../Firebase/firebase";
import { key } from "../../Requests/request,js";

const Movie = ({ movie, user, setTrailerId, setShowTrailer }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const playTrailer = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${key}&language=en-US`
    );
    setTrailerId(
      res.data.results.filter((video) => video.type === "Trailer")[0].key
    );
    setShowTrailer(true);
  };

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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1, ease: "linear" }}
      viewport={{ once: true }}
      className="relative py-5 transition-all duration-300 transform cursor-pointer hover:pr-6 hover:scale-110 hover:z-30 "
    >
      <div className="w-48 h-full rounded-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          alt={movie?.title}
          className="w-full h-full rounded-lg shadow-2xl object-fit shadow-black"
        />
      </div>
      <AnimatePresence wait initial={false}>
        <div
          key={isBookmarked}
          className="absolute bottom-[5px] flex space-x-2 left-[50px] overflow-y-hidden"
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

export default Movie;
