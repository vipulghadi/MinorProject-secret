import { useState } from "react";
import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";

import PrimaryBtn from "./components/shared/buttons/PrimaryBtn";

import SearchResult from "./pages/SearchResult";
import CreateTest from "./pages/CreateTest";
import IntroPage from "./pages/IntroPage";
import Home from "./pages/Home";
import InterviewPage from "./pages/InterviewPage";
import  Footer  from "./components/shared/footer/Footer"

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
     <Route path="/profile" element={<Home/>}/>
     <Route path="/" element={<IntroPage/>}/>
     <Route path="/create-room" element={<CreateTest/>}/>
     <Route path="/room" element={<InterviewPage/>}/>
     <Route path="/search" element={<SearchResult/>}/>
     </Routes>

     <Footer/>
    
    
    </BrowserRouter>
    </>
  );
}

export default App;
