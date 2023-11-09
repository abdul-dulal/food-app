import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen   ">
      <Image src={"/img/empty.png"} height={526} width={300} />
      <h1 className="text-[28px] font-bold text-secondary">
        This page is empty
      </h1>
    </div>
  );
};

export default Dashboard;
