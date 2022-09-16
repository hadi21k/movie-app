import { AiOutlinePlus } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";
import Loading from "../Loading";

const HeroMovieContent = ({ movie, isLoading }) => {
  return (
    <div className="container w-full mx-auto">
      <div className="absolute top-[30%] p-4 tranform z-30 flex flex-col space-y-4">
        {!isLoading ? (
          <>
            <h1 className="text-2xl font-bold text-white">{movie?.title}</h1>
            <h3 className="text-sm font-semibold text-white">
              {movie?.release_date}
            </h3>
            <p className="max-w-xl text-base font-semibold prose text-white">
              {movie?.overview.length > 500
                ? movie?.overview.substring(0, 500) + "..."
                : movie?.overview}
            </p>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default HeroMovieContent;
