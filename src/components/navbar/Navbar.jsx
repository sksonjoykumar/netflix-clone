import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaRegBell, FaRegUserCircle } from "react-icons/fa";
import { logOut } from "../../firebase";

function Navbar() {
  const [searchIcon, setSearchIcon] = useState(false);
  const [signOut, setSignOut] = useState(false);

  const handleSearch = () => {
    setSearchIcon(!searchIcon);
  };

  const handleSignOut = () => {
    setSignOut(!signOut);
  };
  return (
    <>
      <div className="navbar px-4 md:px-20 py-4 ">
        <div className="flex items-center  justify-between font-outfit ">
          <div className="left  flex items-center gap-4 lg:gap-16 ">
            <div className="logo">
              <Link to={"/"}>
                <img src={logo} alt="logo" className="w-20 h-auto" />
              </Link>
            </div>
            <ul className="hidden md:flex items-center gap-7 text-gray-300">
              <li className="text-base  hover:text-[#D81F26] transition-all duration-30">
                <Link>Home</Link>
              </li>
              <li className="text-base hover:text-[#D81F26] transition-all duration-300">
                <Link>TV Shows</Link>
              </li>
              <li className="text-base hover:text-[#D81F26] transition-all duration-300">
                <Link>Movies</Link>
              </li>
              <li className="text-base hover:text-[#D81F26] transition-all duration-300">
                <Link>New & Popular</Link>
              </li>
              <li className="text-base hover:text-[#D81F26] transition-all duration-300">
                <Link>My List</Link>
              </li>
              <li className="text-base hover:text-[#D81F26] transition-all duration-300">
                <Link>Browse by Languages</Link>
              </li>
            </ul>
          </div>
          <div className="right ">
            <ul className="flex gap-5 items-center relative">
              <li className=" relative ">
                <Link className="text-base hover:text-[#D81F26] transition-all duration-300inline-block">
                  <IoIosSearch size={26} onClick={handleSearch} />
                </Link>
                {searchIcon && (
                  <div className="absolute  top-10 md:top-0 -right-32 md:right-10">
                    <input
                      type="search"
                      name="search"
                      id=""
                      className="px-2 py-1.5 shadow-md rounded-md border border-[#D81F26] bg-black text-sm outline-none"
                      placeholder="Search here..."
                    />
                  </div>
                )}
              </li>
              <li className="text-base hover:text-[#D81F26] transition-all duration-300">
                <Link>Children</Link>
              </li>
              <li className="text-base hover:text-[#D81F26] transition-all duration-300">
                <Link>
                  <FaRegBell size={19} />
                </Link>
              </li>
              <li className="text-base hover:text-[#D81F26] transition-all duration-300">
                <Link>
                  <FaRegUserCircle size={22} onClick={handleSignOut} />
                </Link>
              </li>
              {signOut && (
                <div
                  className="absolute -right-3 md:-right-7 top-8 bg-[#D81F26] hover:bg-[#d81f25e1] transition-all duration-200 px-2 py-1 rounded-md cursor-pointer"
                  onClick={logOut}
                >
                  Sign Out
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
