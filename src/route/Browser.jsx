import React,{useEffect,useState} from "react";
import l from "./l";
import { Icon } from '@iconify/react';
import { NavLink } from "react-router-dom";
const Browser = () => {
  function bruh(){
    let b='l\nl'
    console.log(b)
  }
  useEffect(()=>{
    bruh()
  },[])
  const [name,set_name]=useState('')
  return (
    <div className="h-screen p-14 w-full">
      <div className="top-2 absolute border-2  border-neutral-900 z-[99] left-2 rounded-md h-8 w-8 flex items-center justify-center bg-[#8b9dc3] "><NavLink to='/' key='/'><Icon icon="material-symbols:home-outline" className="text-neutral-900" /></NavLink></div>
      <div className="flex items-center justify-center flex-row border-2 border-neutral-900 h-14">
      <Icon icon="material-symbols:search" className="ml-4 h-7 w-7 " />
      <input value={name} onChange={(e)=>{set_name(e.target.value)}} className='outline-none p-2 w-full bg-[#8b9dc3] ' />
      </div>
      <v>
        {
          !name ? (
            <div>
              {l.map((e, index) => (
          <div className={`${index != 0 ? "mt-3" : "mt-8"}`}>
            <div className="bg-neutral-900 text-[#8b9dc3] h-8 w-32 flex items-center justify-center flex-col">
              <p>{e.title}</p>
              
            </div>
            <div>
            <div className={`${! e.description ?'' : 'bg-neutral-900 text-[#8b9dc3] p-3'}`}>{!e.description ? '':`${e.description}`}</div>
            <div className="border-2 border-neutral-900 p-5 overflow-x-auto ">
              {e.code.replace('\r','\n')}
            </div>
            </div>
          </div>
        ))}
            </div>
          ):(
            <div>
              {l.map((e, index) => (
          <div>
            {
              e.title.includes(name)|| e.title.toLowerCase().includes(name) ? (
                <div className={`${index != 0 ? "mt-3" : "mt-8"}`}>
            <div className="bg-neutral-900 text-[#8b9dc3] h-8 w-32 flex items-center justify-center flex-col">
              <p>{e.title}</p>
              
            </div>
            <div>
            <div className={`${! e.description ?'' : 'bg-neutral-900 text-[#8b9dc3] p-3'}`}>{!e.description ? '':`${e.description}`}</div>
            <div className="border-2 border-neutral-900 p-5 overflow-x-auto ">
              {e.code.replace('\r','\n')}
            </div>
            </div>
          </div>
              ):''
            }
          </div>
        ))}
            </div>
          )
        }
      </v>
    </div>
  );
};

export default Browser;
