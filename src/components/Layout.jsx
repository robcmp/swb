import React from "react";
import {Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../views/Home";
import DetailsChars from "../views/DetailsChar";
import DetailsPlanet from "../views/DetailsPlanet";
import DetailsVehic from "../views/DetailsVehic";
import Navbar from "./Navbar";


const Layout = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailchar/:id" element={<DetailsChars />} />
          <Route path="/detailplanet/:id" element={<DetailsPlanet />} />
          <Route path="/detailvehic/:id" element={<DetailsVehic />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};
export default Layout;