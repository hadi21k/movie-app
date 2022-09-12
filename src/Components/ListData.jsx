import { motion } from "framer-motion";

const ListData = ({ movie }) => {
  console.log(movie);
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
      <div className="absolute top-0 grid w-full h-full p-4 text-lg font-bold text-center text-white transition duration-200 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 backdrop-filter backdrop-blur-md place-items-center">
        {movie.title}
      </div>
    </motion.div>
  );
};

export default ListData;
