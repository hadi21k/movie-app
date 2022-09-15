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
            <div className="flex items-center space-x-2">
              {!isLoading && (
                <>
                  <div className="flex items-center p-2 space-x-1 bg-white rounded cursor-pointer sm:p-3">
                    <FiPlay className="w-5 h-5" />
                    <span className="text-sm font-medium">Play</span>
                  </div>
                  <div className="flex items-center p-2 space-x-1 bg-white rounded cursor-pointer sm:p-3">
                    <AiOutlinePlus className="w-5 h-5 " />
                    <span className="text-sm font-medium">My list</span>
                  </div>
                </>
              )}
            </div>
            <h3 className="text-sm text-white font-semibold">{movie?.release_date}</h3>
            <p className="text-base font-semibold text-white prose max-w-xl">
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
