import Link from "next/link";
import React, { useContext } from "react";
import { RiHome7Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { TbSend } from "react-icons/tb";
import { PiDotsNineBold } from "react-icons/pi";
import { RiVideoLine } from "react-icons/ri";
import { useRouter } from "next/router";
import MenuModal from "./ModalMenu";
import { showContext } from "@/pages/_app";
const Sidebar = () => {
  const router = useRouter();
  const [show, setShow] = useContext(showContext);

  const style =
    " mr-4 h-9 w-9 rounded-[6px] bg-[#fceee9] flex items-stretch justify-center ";
  return (
    <div>
      <div className=" md:h-[1150px] h-14 bg-white md:w-[70px] w-full shadow">
        <div className="md:h-screen h-full md:w-20 w-full  md:flex block items-center justify-center ">
          <div className=" md:space-y-8 space-y-0 md:block flex  justify-between items-center pt-3 px-6">
            <Link
              href={"/"}
              className={
                router.pathname == "/"
                  ? `{${style}} border-2 border-[#ecd3ca] text-[#E55527] `
                  : `{${style}}`
              }
            >
              <RiHome7Line />
            </Link>

            <Link
              href={"/dashboard"}
              className={
                router.pathname == "/dashboard"
                  ? `{${style}} border-2 border-[#ecd3ca] text-[#E55527]`
                  : `{${style}}`
              }
            >
              <RxDashboard />
            </Link>
            <Link
              href={"/send"}
              className={
                router.pathname == "/send"
                  ? `{${style}} border-2 border-[#ecd3ca]  text-[#E55527]`
                  : `{${style}}`
              }
            >
              <TbSend />
            </Link>
            <Link
              href={"/more"}
              className={
                router.pathname == "/more"
                  ? `{${style}} border-2 border-[#ecd3ca]  text-[#E55527]`
                  : `{${style}}`
              }
            >
              <PiDotsNineBold />
            </Link>
            <Link
              href={"/video"}
              className={
                router.pathname == "/video"
                  ? `{${style}} border-2 border-[#ecd3ca] text-[#E55527]`
                  : `{${style}}`
              }
            >
              <RiVideoLine />
            </Link>
          </div>
        </div>
      </div>
      {show && <MenuModal />}{" "}
    </div>
  );
};

export default Sidebar;
