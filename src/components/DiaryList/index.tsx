import React from "react";
import ButtonComponent from "../ButtonComponent";
import DiaryItem from "./DiaryItem";
interface IProps {
  className?: string;
}
const index = ({ className }: IProps) => {
  return (
    <div className={`${className}`}>
      <div className="font-Inter font-[400] text-[22px] text-dark500">
        MY DIARY
      </div>
      <div className="grid grid-cols-4 gap-3 ">
        {Array(8)
          .fill(0)
          .map((item: any, index: number) => (
            <DiaryItem key={index} />
          ))}
      </div>
      <ButtonComponent className="mt-[30px]">自分の日記をもっと見る</ButtonComponent>
    </div>
  );
};

export default index;
