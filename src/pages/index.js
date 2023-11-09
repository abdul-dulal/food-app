import React, { useState } from "react";

import FruitList from "@/Components/ui/FruitList";
import FoodDescription from "@/Components/ui/FoodDescription";
import Setting from "@/Components/ui/Setting";

const Home = () => {
  return (
    <div className=" pt-3">
      <div className=" lg:flex md:flex block gap-3 md:p-0 p-3">
        <div className="lg:w-1/4 md:w-1/2  w-[80%] ml-3">
          <FruitList />
        </div>

        <div className="lg:w-2/4 md:w-[60%] w-full  ">
          <FoodDescription />
        </div>
        <div className=" lg:w-1/4 md:w-[0%]  w-[80%] pr-3">
          <Setting />
        </div>
      </div>
    </div>
  );
};

export default Home;
