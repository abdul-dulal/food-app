import React, { useState } from "react";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";
import { PiTextTLight } from "react-icons/pi";
const Setting = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [sliderValue, setSliderValue] = useState(19);
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };
  const sliderStyle = {
    background: `linear-gradient(to right, #E55527 ${sliderValue}%,#fceee9 ${sliderValue}%)`,
  };

  const toggleState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow rounded-2xl p-3 lg:block hidden">
      <div className=" border-2 border-[#e7e7e7] rounded-2xl  p-2">
        <div
          className="flex justify-between  items-center h-5 cursor-pointer"
          onClick={toggleState}
        >
          <div className="flex items-center gap-4">
            <PiTextTLight
              size={10}
              className="h-6 w-6 border border-primary text-primary p-1 rounded "
            />
            <p className="font-semibold text-xs text-primary">Settings</p>
          </div>
          <p>
            {isOpen ? (
              <LiaAngleUpSolid color="#E55527" />
            ) : (
              <LiaAngleDownSolid color="#E55527" />
            )}
          </p>
        </div>

        {isOpen && (
          <div className=" p-1 mt-4">
            <div className="flex justify-between">
              <p className="text-sm font-medium text-secondary my-1">
                Paragraph font size
              </p>
              <p className="text-sm font-medium text-primary">{sliderValue}</p>
            </div>
            <div>
              <input
                className="w-full appearance-none h-1 rounded-full outline-none"
                style={sliderStyle}
                type="range"
                id="rangeSlider"
                value={sliderValue}
                onChange={handleSliderChange}
                min={0}
                max={100}
              />
            </div>

            <div className="">
              <p className="text-sm my-4 font-[#1010101A] mt-2 font-medium">
                Choose Vitamin Type
              </p>
              <div class="relative">
                <select class="block cursor-pointer appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded-sm leading-tight focus:outline-none focus:bg-white ">
                  <option>All Vitamin</option>
                  <option>Vitamin C</option>
                  <option>Vitamin B6</option>
                  <option>Vitamin A,C</option>
                  <option>Vitamin C,K</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <LiaAngleDownSolid />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center my-4">
              <span class=" text-sm font-medium ">Turn Off Subtitle</span>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-[40px] h-[24px] bg-gray-200 peer-focus:outline-none    rounded-full per  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#D9D9D9]"></div>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setting;
