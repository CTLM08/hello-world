import React, { useState, useEffect } from "react";
import Typed from "react-typed";
import { debounce } from "debounce";
import { Icon } from "@iconify/react";
import l from "./l";
import { NavLink } from "react-router-dom";
const List = () => {
  const word = [
    '#',
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "F",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const bruh = l;
  const [user_input, check_user] = useState("");
  return (
    <div className="h-[100vh] w-full p-14 ">
      <div className="top-2 absolute border-2  border-neutral-900 z-[99] left-2 rounded-md h-8 w-8 flex items-center justify-center bg-[#8b9dc3] "><NavLink to='/' key='/'><Icon icon="material-symbols:home-outline" className="text-neutral-900" /></NavLink></div>
      <div className="flex items-center justify-center flex-row border-2 border-neutral-900 h-14">
      <Icon icon="material-symbols:search" className="ml-4 h-7 w-7 " />
      <input value={user_input} onChange={(e)=>{check_user(e.target.value)}} className='outline-none p-2 w-full bg-[#8b9dc3] ' />
      </div>
      <div className="p-14">
        {!user_input ? (
          <div>
            {word.map((e, index) => (
              e=='#'? (<div>
                <div
                  className={`${
                    index == 0 ? "" : "mt-8"
                  } flex flex-row items-center gap-3`}
                >
                  <div className={`text-5xl `}>{e}</div>
                  <div className="h-1 w-full bg-black"></div>
                </div>
                <div className="grid grid-cols-3 ">
                  {bruh.map((x) => (
                    <div className="">
                      {!word.includes(x.title[0]) && !word.includes(x.title[0].toUpperCase()) ? (
                        <div className="h-16 text-xl hover:">{x.title}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
              </div>):(<div>
                <div
                  className={`${
                    index == 0 ? "" : "mt-8"
                  } flex flex-row items-center gap-3`}
                >
                  <div className={`text-5xl `}>{e}</div>
                  <div className="h-1 w-full bg-black"></div>
                </div>
                <div className="grid grid-cols-3 ">
                  {bruh.map((x) => (
                    <div className="">
                      {x.title[0] == e || x.title[0] == e.toLowerCase() ? (
                        <div className="h-16 text-xl hover:">{x.title}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
              </div>)
            ))}
          </div>
        ) : (
         <div className="grid grid-cols-3 ">
          {
            bruh.map((e)=>(
              <div>{e.title.includes(user_input) || e.title.toLowerCase().includes(user_input.toLowerCase()) ? e.title:'' }</div>
            ))
          }
         </div>
        )}
      </div>
    </div>
  );
};

export default List;
