import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

function Player() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjZkOGY5YzlhNjgwMzEzNWE3MDhkMWJjYTE0YzU2NiIsIm5iZiI6MTczMjg2MDc3OC44NjE1ODEsInN1YiI6IjY3NDk1YTU2NGE0ODQxN2I4NDE3NzZiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K_iwX_1b1xTqLT-_aWJ0m7f4tYbvKo_VYliPBBSby-s",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className=" md:hidden">
        <Navbar />
      </div>
      <div className="w-screen h-screen flex justify-center items-start mt-5 md:mt-0 md:items-center">
        <div className="w-auto md:w-[90%] h-[60%] md:h-[90%]">
          <iframe
            src={`
                https://www.youtube.com/embed/${apiData.key}
              `}
            title="trailer"
            allowFullScreen
            className="w-[100%] h-[100%] rounded-md border border-gray-700"
            frameBorder="0"
          ></iframe>
          <div className="player info flex flex-col md:flex-row my-4 text-center justify-between mt-2 font-inter text-base">
            <p>Date: {apiData.published_at.slice(0, 10)}</p>
            <p>Name: {apiData.name}</p>
            <p>Type: {apiData.type}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-44 md:top-14 left-6 border p-2 rounded-full hover:border-red-500 transition-all duration-200 cursor-pointer">
        <FaArrowLeft
          size={22}
          className="cursor-pointer"
          onClick={() => navigate(-2)}
        />
      </div>
    </>
  );
}

export default Player;
