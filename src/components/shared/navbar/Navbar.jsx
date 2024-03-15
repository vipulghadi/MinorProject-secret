import React from "react";
import searchIcon from '../../../assets/icons/search.png'
import { NavLink,Link, useLocation,redirect,useNavigate } from "react-router-dom";
import logo from '../../../assets/images/logo.png'
import menuIcon from '../../../assets/icons/menu.png'
import "./style.css";

function Navbar() {
  const navigate=useNavigate()
  function redirectToSearchPage(){
    
  navigate('/search')
  }
  return (
    <div className=" p-5  flex justify-between items-center h-[80px]  fixed top-0  bg-black overflow-hidden z-50 w-full  ">
      <div className="nav-left font-semibold text-[20px] text-main ">
      <Link to={'/'}>   <img src={logo} alt="" className="w-[120px]" /></Link>
     
      </div>
      <div className="nav-right flex space-x-5 text-primary">
      <div className="search-box-small relative sm:block w-[120px] sm:w-[180px]">
      <img src={searchIcon} alt="" className="w-[12px] h-[12px] absolute left-2 top-3" />
      <input type="text" className="outline-none rounded-md p-2 bg-tertiary w-full text-secondory text-[14px]" placeholder="     search here" onClick={()=>{redirectToSearchPage()}} /></div>
      <img src={menuIcon} alt="" className="sm:hidden w-[35px] h-[35px]" />
      <div className="link  gap-2 sm:flex hidden">
      <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/create-room"}>+</Link>
        <Link to={"/room"}>room</Link></div>
        
      </div>
    </div>
  );
}

export default Navbar;
