import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SearchResult from "../Components/SearchResult";
import useInput from "../Hooks/useInput";
import { key } from "../Requests/request,js";

const Search = () => {
  const [search, setSearch, onSearchChange] = useInput();
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      const fetchSearch = async () => {
        const result = await axios.get(
          search
            ? `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${search}&page=1&include_adult=false`
            : `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=""&page=1&include_adult=false`
        );
        setData(result.data.results);
      };
      fetchSearch();
    } catch (e) {
      console.error(e.code);
    }
  }, [search]);
  return (
    <div className="pt-[80px] bg-black min-h-screen">
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
        {search != 0 ? (
          data.length > 0 ? (
            <div className="grid grid-cols-1 gap-10 py-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {data.map((movie, i) => (
                <SearchResult movie={movie} key={i} />
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
