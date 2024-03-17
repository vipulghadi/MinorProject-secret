// Layout.js
import React from "react";
import { Route, useLocation } from "react-router-dom";
import Navbar from "./shared/navbar/Navbar";

const Layout = ({ children }) => {
  // Define routes where navbar and footer should not be rendered

  const location = useLocation();
  console.log(location);
  const isNavbarVisible = location.pathname !== '/register' && location.pathname !== '/room';

  return ( 
    <>
    {isNavbarVisible && <Navbar/>}
    {children}
    </>
  )
}

export default Layout;
