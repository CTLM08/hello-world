import React from "react";
import Typed from "react-typed";
import { Icon } from '@iconify/react';
import 'animate.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
const Main = () => {
  return (
    <div className="flex items-center justify-center flex-col relative">
        
        <div className="animate__animated animate__fadeIn">
        <Icon icon="ph:code-bold" className="w-20 h-20"/>
        </div>
      <div className="text-5xl mt-2">
        <Typed strings={["Hello World!"]} typeSpeed={50} />
      </div>
      <div>
      <Typed strings={["in 1080 languages"]} typeSpeed={30} />
      </div>
      <div className="flex flex-col">
        <button className="bg-neutral-900 h-12 w-56 mt-8 text-[#8b9dc3] animate__animated animate__lightSpeedInLeft ">
            <NavLink to='/browse' key='browse'>BROWSE</NavLink>
        </button>
        <button className="h-12 w-56 mt-3 bg-[#8b9dc3] border-[3px] border-black animate__animated  animate__lightSpeedInRight">
           <NavLink  to='/list' key='lsit'>LANGUAGES</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Main;
