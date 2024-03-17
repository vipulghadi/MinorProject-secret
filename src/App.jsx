import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SearchResult from "./pages/SearchResult";
import CreateTest from "./pages/CreateTest";
import IntroPage from "./pages/IntroPage";
import Home from "./pages/Home";
import InterviewPage from "./pages/InterviewPage";
import Footer from "./components/shared/footer/Footer";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/profile" element={<Home />} />
            <Route path="/" element={<IntroPage />} />
            <Route path="/create-room" element={<CreateTest />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/room" element={<InterviewPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
