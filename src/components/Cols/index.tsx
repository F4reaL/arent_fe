import React from "react";
import ButtonComponent from "../ButtonComponent";
import ColItem from "./ColItem";

interface IProps {
  className?: string;
}
const index = ({ className }: IProps) => {
  return (
    <div className={className}>
      <div className={`grid grid-cols-4 gap-x-2 gap-y-[18px] `}>
        {Array(8)
          .fill(0)
          .map((item: any, index: number) => (
            <ColItem key={index} />
          ))}
      </div>
      <ButtonComponent className="mt-6">コラムをもっと見る</ButtonComponent>
    </div>
  );
};

export default index;
