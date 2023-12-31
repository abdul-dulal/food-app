import React from "react";
import Image from "next/image";
import { BiLogoFacebookCircle } from "react-icons/bi";
import {
  AiFillTwitterCircle,
  AiOutlineStar,
  AiTwotoneStar,
} from "react-icons/ai";
import { IoIosMore } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
const FoodDescription = () => {
  return (
    <div className="bg-white shadow rounded-2xl px-6 md:space-y-4 space-y-6 pt-4">
      <div className="md:flex block gap-6">
        <div className="md:block hidden">
          <div className="md:w-[50px] w-full space-y-4 flex gap-3 md:flex-col items-center md:pt-20 pt-2  ">
            <BiLogoFacebookCircle
              size={28}
              color="#1877F2"
              radius={100}
              className="cursor-pointer"
            />
            <TiSocialLinkedin
              size={27}
              className=" bg-[#2867B2] text-white rounded-full cursor-pointer"
            />
            <AiFillTwitterCircle
              size={28}
              color="#1DA1F2"
              radius={100}
              className="cursor-pointer"
            />
            <IoIosMore
              size={28}
              radius={100}
              className=" bg-[#E55527] text-white rounded-full cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full ">
          <div className="grid 2xl:grid-cols-2  gap-3 ">
            <div className="">
              <h1 className="text-secondary font-extrabold md:text-[38px] xl:text-[25px] xl:leading-[30px] md:leading-[44px] leading-[30px] text-2xl">
                Health benefits of an avocado
              </h1>
              <h2 className="text-[#212121] mt-3 font-bold text-[18px] ">
                Supports eye health:
              </h2>
              <p className="text-[#212121] font-normal text-sm leading-6 mt-2">
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.
              </p>
              <div className="">
                <h2 className="text-[#212121] font-bold text-[18px] mt-3 ">
                  Supports eye health:
                </h2>
                <p className="text-[#212121] font-normal text-sm  leading-6 mt-2">
                  Spinach contains high levels of vitamin A and other
                  antioxidants that help maintain healthy vision and protect
                  against age-related macular degeneration.
                </p>
              </div>
            </div>
            <div className="">
              <img src={"/img/mango.png"} className="w-full xl:h-[85%]" />
            </div>
          </div>

          <div className="space-y-2 mt-6">
            <h2 className="text-[#212121] font-bold text-[18px] ">
              Supports eye health:{" "}
            </h2>
            <p className="text-[#212121] font-normal text-sm leading-6">
              Spinach contains high levels of vitamin A and other antioxidants
              that help maintain healthy vision and protect against age-related
              macular degeneration.. Spinach contains high levels of vitamin A
              and other antioxidants that help maintain healthy vision and
              protect against age-related macular degeneration.. Spinach
              contains high levels of vitamin A and other antioxidants that help
              maintain healthy vision and protect against age-related macular
              degeneration.. Spinach contains high levels of vitamin A and other
              antioxidants that help maintain healthy vision and protect against
              age-related macular degeneration.. Spinach contains high levels of
              vitamin A and other antioxidants that help maintain healthy vision
              and protect against age-related macular degeneration.. Spinach
              contains high levels of vitamin A and other antioxidants that help
              maintain healthy vision and protect against age-related macular
              degeneration.. Spinach contains high levels of vitamin A and other
              antioxidants that help maintain healthy vision and protect against
              age-related macular degeneration..
            </p>
          </div>
          <div className="grid 2xl:grid-cols-2 gap-4  my-5">
            <div>
              <img src={"/img/apple-big.png"} className="w-full xl:h-[95%]" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-[#212121] font-bold text-[18px] md:mt-0 mt-2 ">
                Supports eye health:
              </h2>
              <p className="text-[#212121] font-normal text-[15px] md:mt-0 mt-3 leading-6">
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.. Spinach contains high levels
                of vitamin A and other antioxidants that help maintain healthy
                vision and protect against age-related macular degeneration..
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
              </p>
            </div>
          </div>
          <div className="mt-3">
            <h1 className="text-sm font-bold text-[#212121]">
              Was this helpful?
            </h1>
            <p className="flex  py-2 md:pb-10 pb-0">
              {Array(4).fill(
                <AiTwotoneStar className="text-[#E55527] text-[18px] " />
              )}
              <AiOutlineStar color="#E55527" size={18} />
            </p>
          </div>
        </div>
      </div>
      <div className="block md:hidden  pb-10">
        <div className="md:w-[50px] w-full  flex gap-3 md:flex-col items-center  ">
          <BiLogoFacebookCircle size={28} color="#1877F2" radius={100} />
          <TiSocialLinkedin
            size={27}
            className=" bg-[#2867B2] text-white rounded-full "
          />
          <AiFillTwitterCircle size={28} color="#1DA1F2" radius={100} />
          <IoIosMore
            size={28}
            radius={100}
            className=" bg-[#E55527] text-white rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodDescription;
