import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { auth, db } from "../Firebase/firebase";

const ListData = ({ movie }) => {
  const user = auth.currentUser;
  const removeFromList = async () => {
    if (user) {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(
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
      transition={{ delay: 0.2, ease: "linear" }}
      viewport={{ once: true }}
      className="relative transition-all duration-300 cursor-pointer group"
    >
      <img
        src={
          movie?.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`
            : ""
        }
        alt={movie.title}
        className="object-cover w-full h-full text-white rounded"
        loading="lazy"
      />
      <div className="absolute top-0 flex flex-col justify-between w-full h-full px-4 py-8 space-y-2 text-lg font-bold text-center text-white transition duration-200 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 backdrop-filter backdrop-blur-md">
        <h1>{movie.title}</h1>
        <div
          onClick={removeFromList}
          className="p-2 font-semibold text-black bg-white rounded"
        >
          Remove from list
        </div>
      </div>
    </motion.div>
  );
};

export default ListData;
