import React from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import { RxDashboard } from "react-icons/rx";
const FoodItem = () => {
  return (
    <div className="relative inline-block w-full mt-3 px-3 md:hidden ">
      <select className="block appearance-none w-full rounded-lg  px-4 py-4 pr-8  shadow leading-tight focus:outline-none focus:shadow-outline">
        <option>Select Food Item</option>

        <option value="apple">Apples</option>
        <option value="oragne">Oranges</option>
        <option value="avocado">Avocado</option>
        <option value="strawberries">Strawberries</option>
        <option value="mango">Mango</option>
        <option value="blueberries"> Blueberries</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center px-2 text-black">
        <LiaAngleDownSolid size={20} />
      </div>
    </div>
  );
};

export default FoodItem;
