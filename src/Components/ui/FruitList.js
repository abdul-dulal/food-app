import React, { useState } from "react";
import Image from "next/image";
import { data } from "../../../info/data";
import { BiSearch } from "react-icons/bi";

const FruitList = () => {
  const [isActive, setIsactive] = useState("fruit");

  return (
    <div className="md:block hidden">
      <div className=" bg-white shadow rounded-2xl px-3 space-y-4 pt-4">
        <div className="flex justify-between  pl-1 pr-1 items-center w-full border-2 rounded-[10px] border-base h-[45px]">
          <button
            onClick={() => setIsactive("fruit")}
            className={` h-9 w-[126px] mx-atuo rounded-[7px]  ${
              isActive == "fruit"
                ? "text-primary  text-base font-semibold bg-base"
                : " text-secondary text-sm font-normal"
            }`}
          >
            Fruits
          </button>
          <button
            onClick={() => setIsactive("vegetable")}
            className={` h-9 w-[126px] mx-atuo rounded-[7px] ${
              isActive == "vegetable"
                ? "text-primary  text-base font-semibold bg-base"
                : " text-secondary text-sm font-normal"
            }`}
          >
            Vegetables
          </button>
        </div>

        <div className="relative flex items-center justify-between">
          <input
            type="text"
            placeholder="Search by Fruits Name"
            className="w-full h-9 pr-10 pl-4 rounded-[9px] border-2 border-[#F0F2F4] focus:outline-none  focus:border-[#F0F2F4] placeholder:text-[#878787] placeholder:text-xs"
          />
          <div className="absolute top-1 right-0 border-2 border-[#ecd3ca]  mr-1 h-7 w-9 rounded bg-[#fceee9] flex items-center justify-center">
            <BiSearch color="#E55527" />
          </div>
        </div>

        <p className="text-sm font-semibold text-secondary">Fruits List</p>

        <div className="space-y-1">
          {data.map((element, index) => {
            return (
              <div
                key={index}
                className={`flex items-center pl-3 gap-4 h-[72px] border-2 cursor-pointer  border-white  ${
                  element.title === "Oranges"
                    ? "border-2  border-primary rounded-[10px]"
                    : " "
                }`}
              >
                <div>
                  <Image src={element.img} height={50} width={50} />
                </div>
                <div>
                  <h1 className="text-sm font-semibold text-secondary">
                    {element.title}
                  </h1>
                  <p className="text-xs font-normal text-[#878787]">
                    {element.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FruitList;
