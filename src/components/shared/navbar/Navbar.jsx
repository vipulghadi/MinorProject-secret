import React from "react";
import searchIcon from '../../../assets/icons/search.png'
import { NavLink,Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <div className=" p-5  flex justify-between items-center h-[80px]  fixed top-0 bg-black z-50 w-full ">
      <div className="nav-left font-semibold text-[20px] text-main ">
      
        LOGO
      </div>
      <div className="nav-right flex space-x-5 text-primary">
      <div className="search-box-small relative">
      <img src={searchIcon} alt="" className="w-[12px] h-[12px] absolute left-2 top-2" />
      <input type="text" className="outline-none rounded-md p-1 bg-tertiary w-[130px] text-secondory text-[14px]" placeholder="      search here" /></div>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/create-room"}>+</Link>
        <Link to={"/room"}>room</Link>
      </div>
    </div>
  );
}

export default Navbar;
