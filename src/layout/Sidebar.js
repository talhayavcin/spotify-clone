/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import { HomeIcon, SearchIcon, LibraryIcon, VectorIcon, ButtonSearchIcon} from "../icons/Icons";
import Logo from '../images/Vector.png';

const Sidebar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between w-56  bg-black-black">
      <div>
        <div className="mt-10 mb-4 ml-6 flex ">
          <img src={Logo} alt="spotify-logo" className="w-36 h-11" />  
        </div>
        <nav className="mb-4">
          <ul>
            <li className="group">
              <div className="inline-block">
                <a href="#" className="flex items-center pl-7 py-2 pr-8 mb-1 pt-7">
                  <HomeIcon />
                  <span className="ml-4 font-normal text-white">Giriş</span>      
                </a>
              </div>
            </li>
            <li className="group">
              <div className="inline-block">
                <a href="#" className="flex items-center pl-7 py-2 pr-8 mb-1 ">
                  <SearchIcon />
                  <span className="ml-4 font-normal text-white opacity-50">Gözat</span>      
                </a>
              </div>
            </li>
            <li className="group">
              <div className="inline-block">
                <a href="#" className="flex items-center pl-7 py-2 pr-8 mb-1">
                  <LibraryIcon />
                  <span className="ml-4 font-normal text-white opacity-50">Kitaplık</span>      
                </a>
              </div>
            </li>
          </ul>              
        </nav>
        <div className="pl-7 pt-10">
          <h4 className="text-white opacity-60 tracking-widest font-normal text-xs uppercase">Çalma Listelerin</h4>      
        </div>
        <div className="mr-auto ml-6 relative mt-4">
          <label for="search-input" className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0">
            <ButtonSearchIcon/>
          </label>
          <input type="text" id="search-input" className="h-10 pl-12 outline-none text-white font-small bg-neutral-700 rounded-3xl text-sm placeholder-black/50 w-40" placeholder="Ara"/>
          <label className="text-black w-12 h-10 flex items-center justify-end absolute top-0 left-0">
            <VectorIcon/>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Sidebar