import { useState } from "react";
import { AiFillHeart, AiFillHome, AiFillSetting } from "react-icons/ai";
import { MdAccountBox, MdForum, MdOutlineWork } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { GrLogout } from "react-icons/gr";

const Sidebar = () => {
  return (
    <div>
      <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>
      <div className="bg-white"></div>
      <div className="bg-white h-full ">
        <div className="flex-col flex">
          <div className="w-full border-b-2 border-gray-200"></div>
          <div className="flex bg-gray-100  overflow-x-hidden">
            <div className="bg-white lg:flex md:w-64 md:flex-col hidden">
              <div className="flex-col pt-5 flex overflow-y-auto">
                <div className="h-full flex-col justify-between px-4 flex">
                  <div className="space-y-4">
                    <div className="bg-top bg-cover space-y-1">
                      <a
                        href="#"
                        className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex gap-4
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                      >
                        <AiFillHome className="  text-xl text-[#001eb3]" />
                        <span>Dashboard</span>
                      </a>
                      <a
                        href="#"
                        className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex gap-4
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer "
                      >
                        <MdOutlineWork className="text-xl text-[#001eb3]" />
                        <span>Search Jobs</span>
                      </a>
                      <a
                        href="#"
                        className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex gap-4
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                      >
                        <MdForum className="text-xl text-[#001eb3]" />
                        <span>Forum</span>
                      </a>
                    </div>
                    <div>
                      <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase">
                        User Options
                      </p>
                      <div className="mt-4 bg-top bg-cover space-y-1">
                        <a
                          href="#"
                          className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex gap-4
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                        >
                          <MdAccountBox className="text-xl text-[#001eb3]" />
                          <span>View Account</span>
                        </a>
                        <a
                          href="#"
                          className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex gap-4
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                        >
                          <AiFillHeart className="text-xl text-[#001eb3]" />
                          <span>View Saved Jobs</span>
                        </a>
                        <a
                          href="#"
                          className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex gap-4
                      transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                        >
                          <BsBriefcaseFill className="text-xl text-[#001eb3]" />
                          <span>Manage Jobs</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 pb-4">
                    <div className="bg-top bg-cover space-y-1">
                      <a
                        href="#"
                        className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex gap-4
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                      >
                        <AiFillSetting className="text-xl text-[#001eb3]" />
                        <span>Settings</span>
                      </a>
                      <a
                        href="#"
                        className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex gap-4
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                      >
                        <GrLogout className="text-xl text-[#001eb3]" />
                        <span>Logout</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
