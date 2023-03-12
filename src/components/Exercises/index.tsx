import React from "react";
import EXItem from "./EXItem";

interface IProps {
  className: string;
}
const index = ({ className }: IProps) => {
  return (
    <div className={`bg-dark600 ${className}`}>
      <div className=" flex gap-7 font-Inter font-[400] text-white">
        <div className=" text-[15px] ">
          <div>MY</div>
          <div>EXERCISE</div>
        </div>

        <div className="text-[22px]">2021.05.21</div>
      </div>
      <div className="ex-container  grid grid-cols-2 gap-x-10 pr-8">
        {Array(20)
          .fill(0)
          .map((item: any, index: number) => (
            <EXItem key={index} />
          ))}
      </div>
    </div>
  );
};

export default index;
