/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { BackIcon, ForwardIcon, ButtonSearchIcon } from "../icons/Icons";
import ProfilePic from '../images/ProfilePic.png'
import CoverPicture from '../images/CoverPicture.png'
import CoverPicture2 from '../images/CoverPicture2.png'
import CoverPicture3 from '../images/CoverPicture3.png'
import CoverPicture4 from '../images/CoverPicture4.png'
import CoverPicture5 from '../images/CoverPicture5.png'
import CoverPicture7 from '../images/CoverPicture7.png'
import CoverPicture8 from '../images/CoverPicture8.png'

const Content = () => {
  return (
    <div className="flex-auto overflow-auto" style={{background: "linear-gradient(113.83deg, #121212 0.59%, #121212 99.74%)"}}>
      <nav className="h-[8rem] flex items-center justify-between px-8 relative z-10">
        <nav className="flex items-center gap-x-3">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black-black">
            <BackIcon />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black-black ">
            <ForwardIcon />
          </button>
        </nav>
        <div className="mr-auto ml-12 relative">
          <label for="search-input" class="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0">
            <ButtonSearchIcon/>
          </label>
          <input type="text" id="search-input" class="h-10 pl-12 outline-none text-white font-small bg-neutral-700 rounded-3xl text-sm placeholder-black/50 max-w-full w-[22.75rem]" placeholder="Ara"/>
        </div>
        <nav className="relative">
          <button className="flex items-center h-10 rounded-3xl pr-2 bg-neutral-700" type="button" >
            <img src={ProfilePic} alt="profile" className="w-8 h-8 rounded-full p-1 mr-1" />
            <span className="text-sm font-semibold mr-2 text-white opacity-60">Arthur Guillermin Ha...</span>
          </button>
        </nav>
      </nav>
      <div className="px-8 py-5">
        <div className="grid gap-y-8">
          <section>
            <header className="flex items-center justify-between mb-4">
              <h3 className="text-2xl text-white">Yakında Çalanlar</h3>
            </header>
            <div className="grid grid-cols-5 gap-x-6">
              <a aria-current="page" className="bg-black-footer p-4 rounded group-active" href="#">
                <div className="pt-[100%] relative mb-4">
                  <img src={CoverPicture} alt="pic1" className="absolute inset-0 object-cover w-full h-full rounded" />
                </div>
                <h6 className="overflow-hidden overflow-ellipsis text-base ml-3 text-white">4 - 2</h6>
                <p className="line-clamp-2 text-link text-sm mt-1 ml-3 text-white opacity-60">Çalma Listesi Açıklaması</p>
              </a>
              <a aria-current="page" className="bg-black-footer p-4 rounded group-active" href="#">
                <div className="pt-[100%] relative mb-4">
                  <img src={CoverPicture2} alt="pic1" className="absolute inset-0 object-cover w-full h-full rounded" />
                </div>
                <h6 className="overflow-hidden overflow-ellipsis text-base ml-3 text-white">Arneo Tunes - Winter 2020</h6>
                <p className="line-clamp-2 text-link text-sm mt-1 ml-3 text-white opacity-60">Çalma Listesi Açıklaması</p>
              </a>
              <a aria-current="page" className="bg-black-footer p-4 rounded group-active" href="#">
                <div className="pt-[100%] relative mb-4">
                  <img src={CoverPicture3} alt="pic1" className="absolute inset-0 object-cover w-full h-full rounded" />
                </div>
                <h6 className="overflow-hidden overflow-ellipsis text-base ml-3 text-white">2019'un En İyileri</h6>
                <p className="line-clamp-2 text-link text-sm mt-1 ml-3 text-white opacity-60">Çalma Listesi Açıklaması</p>
              </a>
              <a aria-current="page" className="bg-black-footer p-4 rounded group-active" href="#">
                <div className="pt-[100%] relative mb-4">
                  <img src={CoverPicture4} alt="pic1" className="absolute inset-0 object-cover w-full h-full rounded" />
                </div>
                <h6 className="overflow-hidden overflow-ellipsis text-base ml-3 text-white">AdFab Open Space</h6>
                <p className="line-clamp-2 text-link text-sm mt-1 ml-3 text-white opacity-60">Çalma Listesi Açıklaması</p>
              </a>
              <a aria-current="page" className="bg-black-footer p-4 rounded group-active" href="#">
                <div className="pt-[100%] relative mb-4">
                  <img src={CoverPicture5} alt="pic1" className="absolute inset-0 object-cover w-full h-full rounded" />
                </div>
                <h6 className="overflow-hidden overflow-ellipsis text-base ml-3 text-white">Ed Banger Klasik</h6>
                <p className="line-clamp-2 text-link text-sm mt-1 ml-3 text-white opacity-60">Çalma Listesi Açıklaması</p>
              </a>
            </div>
            <header className="flex flex-col  justify-between space-y-1 mb-4 pt-6">
              <h3 className="text-2xl text-white">Tavsiye Edilenler</h3>
              <p className="text-white opacity-60 text-sm">Sevdiğin her şeyden biraz dinle.</p>
            </header>
            <div className="grid grid-cols-5 gap-x-6">
              <a aria-current="page" className="bg-black-footer p-4 rounded group-active" href="#">
                <div className="pt-[100%] relative mb-4">
                  <img src={CoverPicture4} alt="pic1" className="absolute inset-0 object-cover w-full h-full rounded" />
                </div>
                <h6 className="overflow-hidden overflow-ellipsis text-base ml-3 text-white">4 - 2</h6>
                <p className="line-clamp-2 text-link text-sm mt-1 ml-3 text-white opacity-60">Çalma Listesi Açıklaması</p>
              </a>
              <a aria-current="page" className="bg-black-footer p-4 rounded group-active" href="#">
                <div className="pt-[100%] relative mb-4">
                  <img src={CoverPicture7} alt="pic1" className="absolute inset-0 object-cover w-full h-full rounded" />
                </div>
                <h6 className="overflow-hidden overflow-ellipsis text-base ml-3 text-white">Arneo Tunes - Winter 2020</h6>
                <p className="line-clamp-2 text-link text-sm mt-1 ml-3 text-white opacity-60">Çalma Listesi Açıklaması</p>
              </a>
              <a aria-current="page" className="bg-black-footer p-4 rounded group-active" href="#">
                <div className="pt-[100%] relative mb-4">
                  <img src={CoverPicture8} alt="pic1" className="absolute inset-0 object-cover w-full h-full rounded" />
                </div>
                <h6 className="overflow-hidden overflow-ellipsis text-base ml-3 text-white">2019'un En İyileri</h6>
                <p className="line-clamp-2 text-link text-sm mt-1 ml-3 text-white opacity-60">Çalma Listesi Açıklaması</p>
              </a>
              <a aria-current="page" className="bg-black-footer p-4 rounded group-active" href="#">
                <div className="pt-[100%] relative mb-4">
                  <img src={CoverPicture4} alt="pic1" className="absolute inset-0 object-cover w-full h-full rounded" />
                </div>
                <h6 className="overflow-hidden overflow-ellipsis text-base ml-3 text-white">AdFab Open Space</h6>
                <p className="line-clamp-2 text-link text-sm mt-1 ml-3 text-white opacity-60">Çalma Listesi Açıklaması</p>
              </a>
              <a aria-current="page" className="bg-black-footer p-4 rounded group-active" href="#">
                <div className="pt-[100%] relative mb-4">
                  <img src={CoverPicture5} alt="pic1" className="absolute inset-0 object-cover w-full h-full rounded" />
                </div>
                <h6 className="overflow-hidden overflow-ellipsis text-base ml-3 text-white">Ed Banger Klasik</h6>
                <p className="line-clamp-2 text-link text-sm mt-1 ml-3 text-white opacity-60">Çalma Listesi Açıklaması</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Content