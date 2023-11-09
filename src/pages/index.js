import React, { useState } from "react";

import FruitList from "@/Components/ui/FruitList";
import FoodDescription from "@/Components/ui/FoodDescription";
import Setting from "@/Components/ui/Setting";

const Home = () => {
  return (
    <div class=" pt-3">
      <div class="md:flex block gap-3 md:p-0 p-3">
        <div class="md:w-[20%] w-[80%] ml-3">
          <FruitList />
        </div>

        <div class="md:w-[60%] w-full  ">
          <FoodDescription />
        </div>
        <div class=" w-[20%] pr-3">
          <Setting />
        </div>
      </div>
    </div>
  );
};

export default Home;
