import axios from "axios";
import { useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase";
import Movie from "./Movie";

const ScrollData = ({ category, url }) => {
  const [data, setData] = useState([]);
  const user = auth.currentUser;
  useEffect(() => {
    const fetchTrending = async () => {
      const result = await axios.get(url);
      setData(result.data.results);
    };
    fetchTrending();
  }, []);
  return (
    <>
      <h1 className="px-4 mt-4 text-xl font-bold text-white sm:text-2xl">
        {category}
      </h1>
      <div className="flex w-full px-4 py-6 -space-x-6 overflow-x-scroll scrollbar-hide">
        {data?.map((movie, i) => (
          <Movie movie={movie} key={i} user={user} />
        ))}
      </div>
    </>
  );
};

export default ScrollData;
