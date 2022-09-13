import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { auth } from "../../Firebase/firebase";
import Movie from "./Movie";

const ScrollData = ({ category, url }) => {
  const scrollbar = useRef();
  const [data, setData] = useState([]);
  const user = auth.currentUser;
  useEffect(() => {
    const fetchTrending = async () => {
      const result = await axios.get(url);
      setData(result.data.results);
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
    <div className="relative group ">
      <h1 className="px-4 mt-4 text-xl font-bold text-white sm:text-2xl">
        {category}
      </h1>
      <div
        onClick={scrollLeft}
        className="absolute z-50 hidden p-1 transform -translate-y-1/2 bg-gray-400 rounded-full cursor-pointer top-1/2 left-4 group-hover:block"
      >
        <AiOutlineArrowLeft className="w-8 h-8 text-black" />
      </div>
      <div
        ref={scrollbar}
        className="flex w-full px-4 py-6 -space-x-6 overflow-x-scroll scrollbar-hide scroll-smooth"
      >
        {data?.map((movie, i) => (
          <Movie movie={movie} key={i} user={user} />
        ))}
      </div>
      <div
        onClick={scrollRight}
        className="absolute z-50 hidden p-1 transform -translate-y-1/2 bg-gray-400 rounded-full cursor-pointer right-4 top-1/2 group-hover:block"
      >
        <AiOutlineArrowRight className="w-8 h-8 text-black" />
      </div>
    </div>
  );
};

export default ScrollData;
