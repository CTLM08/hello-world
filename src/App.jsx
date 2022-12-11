import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Browser from "./route/Browser";
import Main from "./route/Main";
import Typed from "react-typed";
import { Icon } from "@iconify/react";
import "animate.css";
import List from "./route/List";
const App = () => {
  return (
    <div className="bg-[#8b9dc3] w-full h-screen flex items-center justify-center overflow-y-auto relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/browse" element={<Browser />} />
          <Route path='/list' element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
