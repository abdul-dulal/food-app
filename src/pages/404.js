import Image from "next/image";
import React from "react";

const PageNotfound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img className="h-[300px] w-[500px] " src={"/img/404-status-code.png"} />
    </div>
  );
};

export default PageNotfound;
