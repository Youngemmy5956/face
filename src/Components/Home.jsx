import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { GiFireplace } from "react-icons/gi";
import { MdGroups2 } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { CgMenuGridR } from "react-icons/cg";
import {FaFacebookMessenger} from "react-icons/fa";
import {BsBell} from "react-icons/bs";
import {CgProfile} from "react-icons/cg";
import {BsFacebook} from "react-icons/bs";
import {BsPeopleFill} from "react-icons/bs";
import {FcFeedback} from "react-icons/fc";
import {HiUserGroup} from "react-icons/hi";
import {AiOutlineClockCircle} from "react-icons/ai";
import {BsFillSave2Fill} from "react-icons/bs";
import {IoIosArrowDropdown} from "react-icons/io";
import {BsBook} from "react-icons/bs";
import {BsCameraReels} from "react-icons/bs";

export default function Home() {
  return (
    <div className="bg-black text-white ">
      <header className="flex justify-between px-4 pt-14 shadow-lg">
        <span className=" ">
          <main className="flex cursor-pointer">
            <BsFacebook className="text-4xl" />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search Facebook"
              className="bg-black border-blue-950 border-2 rounded-full text-white px-4 py-2 ml-4"
            />
          </main>
        </span>

        <span className="flex gap-20 cursor-pointer">
          <AiOutlineHome className="text-2xl hover:bg-[#8d949e] hover:px-16 hover:py-[6px] hover:rounded-lg" />
          <MdOndemandVideo className="text-2xl hover:bg-[#8d949e] hover:px-16 hover:py-[8px] hover:rounded-lg hover:static" />
          <GiFireplace className="text-2xl hover:bg-[#8d949e] hover:px-16 hover:py-[8px] hover:rounded-lg hover:static" />
          <MdGroups2 className="text-2xl hover:bg-[#8d949e] hover:px-16 hover:py-[8px] hover:rounded-lg hover:static" />
          <CgGames className="text-2xl hover:bg-[#8d949e] hover:px-16 hover:py-[8px] hover:rounded-lg hover:static" />
        </span>

        <span className="flex gap-6 cursor-pointer">
          <CgMenuGridR className="text-2xl hover:bg-[#8d949e] hover:px-16 hover:py-[6px] hover:rounded-lg hover:bg-center" />
            <FaFacebookMessenger className="text-2xl hover:bg-[#8d949e] hover:px-16 hover:py-[6px] hover:rounded-lg hover:bg-center" />
            <BsBell className="text-2xl hover:bg-[#8d949e] hover:px-16 hover:py-[6px] hover:rounded-lg hover:bg-center" />
            <CgProfile className="text-2xl hover:bg-[#8d949e] hover:px-16 hover:py-[6px] hover:rounded-lg hover:bg-center" />
        </span>
      </header>

      <section className="w-full flex justify-between px-4">
        <aside className="w-1/3">
          <p className="flex pt-4 gap-3 text-[#8d949e]"><CgProfile className="text-2xl"/>Emmanuel Nwamini</p>
          <p className="flex pt-4 gap-3 text-[#8d949e]"><BsPeopleFill className="text-2xl"/>People</p>
          <p className="flex pt-4 gap-3 text-[#8d949e]"><FcFeedback className="text-2xl"/>People</p>
          <p className="flex pt-4 gap-3 text-[#8d949e]"><HiUserGroup className="text-2xl"/>Group</p> 
          <p className="flex pt-4 gap-3 text-[#8d949e]"><GiFireplace className="text-2xl"/>Market Place</p> 
          <p className="flex pt-4 gap-3 text-[#8d949e]"><MdOndemandVideo className="text-2xl"/>Watch</p> 
          <p className="flex pt-4 gap-3 text-[#8d949e]"><AiOutlineClockCircle className="text-2xl"/>Memories</p> 
          <p className="flex pt-4 gap-3 text-[#8d949e]"><BsFillSave2Fill className="text-2xl"/>Saved</p> 
          <p className="flex pt-4 gap-3 text-[#8d949e]"><IoIosArrowDropdown className="text-2xl"/>See more</p> 
          <hr className="w-[50%]" />
          <p className="pt-2 text-[20px] text-[#8d949e]">Your shortcuts</p>
          <p className="flex pt-4 gap-3 text-[#8d949e]"><CgProfile className="text-2xl"/>Emmanuel Nwamini</p>
          <p className="flex pt-4 gap-3 text-[#8d949e]"><CgProfile className="text-2xl"/>Emmanuel Nwamini</p>
          <p className="flex pt-4 gap-3 text-[#8d949e]"><CgProfile className="text-2xl"/>Emmanuel Nwamini</p>   

        </aside>

        <main className="w-1/3">

          <div>
            <span>
              <p className="text-[#8d949e]"><BsBook/>Stories</p>
              <p className="text-[#8d949e]"> <BsCameraReels/>Reels</p>
            </span>
          </div>
        
        
        
        
        </main>

        <span className="w-1/3">emmanuel</span>
      </section>
    </div>
  );
}
