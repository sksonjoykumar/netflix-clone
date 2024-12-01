import React from "react";
import Navbar from "../../components/navbar/Navbar";
import heroTile from "../../assets/hero_title.png";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import TitleCards from "../../components/title-cards/TitleCards";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div className="">
      <div
        className="bg-img h-screen w-full overflow-hidden bg-no-repeat bg-cover bg-transparent "
        style={{ backgroundImage: `url('/hero_banner.jpg')` }}
      >
        <Navbar />
        <div className="hero-caption px-4 md:px-20  md:mt-40 md:max-w-xl text-white overflow-hidden">
          <img src={heroTile} alt="hero-title" className="w-96" />
          <p className=" text-center md:text-left mt-5 text-base">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>

          <div className=" flex justify-center md:justify-start mt-5 gap-4">
            <button
              type="button"
              className="bg-white px-4 py-1.5 rounded-md flex items-center gap-2 hover:bg-[#ffffffd6] transition-all duration-200"
            >
              <FaPlay color="black" />
              <span className="text-black font-semibold text-base">Play</span>
            </button>
            <button
              type="button"
              className="bg-white px-3 py-1.5 rounded-md flex items-center gap-2 hover:bg-[#ffffffc3] transition-all duration-200"
            >
              <IoMdInformationCircleOutline color="black" size={20} />
              <span className="text-black font-semibold text-base">
                more info
              </span>
            </button>
          </div>
        </div>
        <div className="mt-10">
          <TitleCards title={"Popular on Netflix"} category={"now_playing"} />
        </div>
      </div>
      <div className="-mt-44 md:mt-0">
        <TitleCards title={"Blockbuster Movies"} category={"upcoming"} />
        <TitleCards title={"Only on Netflix"} category={"now_playing"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics for You"} category={"top_rated"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
