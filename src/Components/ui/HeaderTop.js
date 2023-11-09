import Image from "next/image";
import logo from "/public/img/food-network 1.png";
import { BiSearch } from "react-icons/bi";
import { BsFillSunFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { BiSidebar } from "react-icons/bi";
import Link from "next/link";
import { useContext, useState } from "react";
import { loadingContext, showContext } from "@/pages/_app";
const HeaderTop = () => {
  const [show, setShow] = useContext(showContext);

  const style =
    " border-2 border-[#ecd3ca] cursor-pointer mr-4 h-8 w-8 rounded-[6px] bg-[#fceee9] md:flex hidden items-center justify-center";
  return (
    <div className=" h-[60px] flex justify-between  items-center bg-white shadow">
      <div className="ml-4">
        <Link href={"/"}>
          <Image src={logo} height={36} width={72} />
        </Link>{" "}
      </div>
      <div className="relative flex items-center justify-between md:visible invisible">
        <input
          type="text"
          placeholder="Search Best Food"
          className=" md:w-96 w-0 h-10 pr-10 pl-4 rounded-[9px] border-2 border-[#F0F2F4]   focus:outline-none  focus:border-[#F0F2F4] placeholder:text-[#101010] placeholder:text-sm"
        />
        <div className="absolute top-1 cursor-pointer right-0 border-2 border-[#ecd3ca]  mr-4 h-8 w-8 rounded bg-[#fceee9] flex items-center justify-center">
          <BiSearch color="#E55527" />
        </div>
      </div>
      <div className="flex md:gap-6 gap-0">
        <div className={`${style} `}>
          <BsFillSunFill height={24} width={24} color="#E55527" />
        </div>
        <div className={`${style} `}>
          <BiSidebar height={24} width={24} color="#101010" />
        </div>
        <div className="md:hidden  border-2 border-[#ecd3ca]  mr-4 h-8 w-8 rounded bg-[#fceee9] flex items-center justify-center">
          <BiSearch color="#E55527" />
        </div>
        <div className=" border-2 cursor-pointer border-[#ecd3ca]  mr-4 h-8 w-8 rounded-[6px] bg-[#fceee9] md:flex hidden  items-center justify-center">
          <FaBars height={24} width={24} color="#101010" />
        </div>
        <div className=" border-2 cursor-pointer border-[#ecd3ca]  mr-4 h-8 w-8 rounded-[6px] bg-[#fceee9] flex md:hidden items-center justify-center">
          <FaBars
            height={24}
            width={24}
            color="#101010"
            onClick={() => setShow(!show)}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
