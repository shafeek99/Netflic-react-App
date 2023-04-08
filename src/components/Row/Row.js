import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Movie } from "../movie/Movie";

export const Row = ({ title, Url,rowId }) => {
  const [movies, setmovies] = useState([]);
  const [like, setLike] = useState(false);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(Url);
      setmovies(response.data.results);
      return response;
    };
    fetchMovies();
  }, [Url]);
  const SlideLeft = () => {
    let slider= document.getElementById('slider'+rowId);
    slider.scrollLeft=slider.scrollLeft-500;
  };
  const SlideRight = () => {
    let slider= document.getElementById('slider'+rowId);
    slider.scrollLeft=slider.scrollLeft+500;
  };
  console.log(movies);
  return (
    <div>
      <h2 className=" text-white font-bold  md:text-xl p-4">{title}</h2>
      <div className=" relative flex items-center group">
        <MdChevronLeft onClick={SlideLeft}
          className="bg-white rounded-full opacity-50 hover:opacity-100 absolute cursor-pointer z-10 hidden group-hover:block "
          size={40}
        />
        <div
          id={"slider" +rowId}
          className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight onClick={SlideRight}
          className="bg-white rounded-full opacity-50 right-0 hover:opacity-100 absolute cursor-pointer z-10 hidden group-hover:block "
          size={40}
        />
      </div>
    </div>
  );
};
