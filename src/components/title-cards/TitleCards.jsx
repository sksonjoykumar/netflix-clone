import React, { useEffect, useRef, useState } from "react";
import titleCards from "../../assets/cards/Cards_data";
import "./title.css";
import { Link } from "react-router-dom";

function TitleCards({ title, category }) {
  const [apiData, setApiData] = useState([]);
  const cardRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjZkOGY5YzlhNjgwMzEzNWE3MDhkMWJjYTE0YzU2NiIsIm5iZiI6MTczMjg2MDc3OC44NjE1ODEsInN1YiI6IjY3NDk1YTU2NGE0ODQxN2I4NDE3NzZiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K_iwX_1b1xTqLT-_aWJ0m7f4tYbvKo_VYliPBBSby-s",
    },
  };

  // handleWheel function
  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.results) {
          setApiData(res.results);
        } else {
          console.error("Invalid API response:", res);
        }
      })
      .catch((err) => console.error("API Fetch Error:", err));

    cardRef.current.addEventListener("wheel", handleWheel);

    // Cleanup event listener
    // return () => {
    //   currentRef.removeEventListener("wheel", handleWheel);
    // };
  }, []);

  return (
    <>
      <div className="w-full px-4 md:px-20">
        <h1 className="mt-4 font-semibold text-2xl text-white">{title}</h1>
        <div
          className="flex gap-6 overflow-x-scroll hide-scrollbar"
          ref={cardRef}
        >
          {apiData.map((card, index) => (
            <Link
              to={`player/${card.id}`}
              key={index}
              className="relative hover:scale-105 transition-all duration-300 "
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path}
                alt=""
                className="max-w-[260px] rounded-md cursor-pointer mt-3 border border-gray-500"
              />
              <p className="absolute right-7 bottom-5 font-semibold text-xl">
                {card.original_title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default TitleCards;
