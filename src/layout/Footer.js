import React from "react";
import { LikeIcon, CardIcon, BackMusic, ForwardMusic, PlayMusic, StickIcon } from "../icons/Icons";
import MiniCover from '../images/MiniCover.png'

const Footer = () => {
    return(
  <div className="fixed bottom-0 w-full h-24 bg-black-play border-t border-white border-opacity-5">
    <div className="flex px-4 justify-between items-center h-full">
      <div className="min-w-[11rem] w-[30%]">
        <div className="flex items-center">
          <div className="flex items-center mr-3">
            <div className="w-12 h-12 mr-3 relative group flex-shrink-0">
              <img src={MiniCover} alt="song" />
            </div>
            <div>
              <h6 className="text-sm text-white">One Step Beyond</h6>
              <p className="text-white text-opacity-60">Madness</p>
            </div>
          </div>
          <button class="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <LikeIcon />
          </button>
          <button class="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <CardIcon />
          </button>
        </div>
      </div>
      <div className="max-w-[45rem] w-[40%] pt-2 flex flex-col px-4 items-center">
        <div className="flex items-center gap-x-3">
          <button class="w-8 h-8 flex items-center justify-center   hover:text-opacity-100">
            <StickIcon/><BackMusic />
          </button>
          <button class="w-8 h-8  flex items-center justify-center text-black rounded-full hover:scale-[1.06]">
            <PlayMusic className="text-white text-opacity-60" />
          </button>
          <button class="w-8 h-8 flex items-center justify-center  hover:text-opacity-100">
            <ForwardMusic /><StickIcon/>
          </button>
        </div>
        <div className="w-full flex items-center mt-1 gap-x-2">
          <div className="text-white text-opacity-60 text-sm">00:00</div>
          <div className="w-full h-8 flex group" style={{transform: "scale(1);"}} >
            <div className="h-1.5 w-full rounded-md self-center" style={{background: "linear-gradient(to right, rgb(29, 185, 84) 0%, rgb(29, 185, 84) 0%, rgb(83, 83, 83) 0%, rgb(83, 83, 83) 100%)"}}></div>
          </div>
          <div className="text-white text-opacity-60 text-sm">02:18</div>
        </div>
      </div>
      <div className="min-w-[11rem] w-[30%] flex items-center justify-end"></div>
    </div>
  </div>
    )
}

export default Footer