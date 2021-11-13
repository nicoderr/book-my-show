import React from "react";
import {
  BiMenu,
  BiSearchAlt,
  BiSearch,
  BiChevronLeft,
  BiShareAlt,
  BiChevronRight,
} from "react-icons/bi";

const NavLG = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full justify-between px-10 py-3">
          <div className="flex gap-3 flex-row w-3/4 items-center ">
            <div className="h-12 w-14">
              <img
                src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                alt=" logo"
                className="h-full w-full"
              />
            </div>
            <div className="flex flex-row items-center gap-3 bg-white w-full rounded-md px-4">
              <BiSearch />
              <input
              type="search"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="w-full py-2 focus:outline-none "
              />
            </div>
          </div>
          <div className=" items-center flex flex-row gap-3  ">
            <button className="bg-red-600 text-sm text-white px-3 py-2 rounded-md">
              Sign in
            </button>
            <div className="text-white w-10 h-10">
              <BiMenu className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="bg-regal-blue-dark text-white flex flex-row px-10 py-2.5 w-full">
          <div className="flex flex-row w-1/2 gap-1 justify-evenly">
            <h5 className="text-gray-300 text-xs">Movies</h5>
            <h5 className="text-gray-300 text-xs">Stream</h5>
            <h5 className="text-gray-300 text-xs">Events</h5>
            <h5 className="text-gray-300 text-xs">Play</h5>
            <h5 className="text-gray-300 text-xs">Sport</h5>
            <h5 className="text-gray-300 text-xs">Activities</h5>
            <h5 className="text-gray-300 text-xs">Buzz</h5>
          </div>
          <div className="flex flex-row w-1/2 gap-3 justify-end">
            <h5 className="text-xs">ListYourShow</h5>
            <h5 className="text-xs">Corporate</h5>
            <h5 className="text-xs">Offers</h5>
            <h5 className="text-xs">Gift Cards</h5>
          </div>
        </div>
      </div>
    </>
  );
};

const NavSM = () => {
  return (
    <>
      <div className="flex flex-row bg-regal-blue justify-between items-center w-full px-3 py-1">
        <div className="flex flex-col text-white p-3">
          <h1 className="text-2xl font-bold">It All Starts Here!</h1>
          <BiChevronRight/>
        </div>
        <button className="text-white w-10 h-10  focus:text-gray-600">
          <BiSearchAlt className="h-full w-full"/>
        </button>
      </div>
    </>
  );
};

const NavMD = () => {
  return (
    <>
      <div className="flex flex-row bg-regal-blue w-full p-3 gap-3">
        <div className='w-10 h-10 text-white'>
        <BiChevronLeft className="w-full h-full"/></div>
        <div className="flex flex-row items-center gap-3 bg-white w-full rounded-md px-4">
              <BiSearch />
              <input type="search"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="w-full py-2 focus:outline-none "
              />
            </div>
            <div className='w-10 h-10 text-white'>
        <BiShareAlt className="w-full h-full"/></div>
        </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <div>
        <div className="lg:hidden md:hidden sm:flex">
          <NavSM />
        </div>
        <div className="hidden lg:hidden md:flex">
          <NavMD />
        </div>
        <div className="hidden  lg:flex bg-regal-blue">
          <NavLG />
        </div>
      </div>
    </>
  );
};
export default Navbar;
