import React, { useState } from "react";
import ImgBodyRecord from "../assets/img/MyRecommend-1.jpg";
import ImgExercise from "../assets/img/MyRecommend-2.jpg";
import ImgDiary from "../assets/img/MyRecommend-3.jpg";
import ChartComponent from "../components/ChartComponent";
import Exercises from "../components/Exercises"
const PersonalSchedule = () => {
  const [sortIndex, setSortIndex] = useState<number>(1)
  const TEXT = ({ children }: any) => {
    return <div className="font-Hiragino font-[300] text-white text-[14px] w-[160px] text-center bg-primary400 py-[1.5px]">{children}</div>
  }
  return (
    <div className="pt-[56px] px-[160px]">
      <div className=" flex justify-between font-Inter text-[25px] text-primary300">
        <div className="relative overflow-hidden w-[288px] h-[288px] border-[24px] border-primary300 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.6)]">
          <img
            src={ImgBodyRecord}
            className="absolute z-[-1] grayscale"
            alt=""
          />
          <div>BODY RECORD</div>
          <TEXT>自分のカラダの記録</TEXT>

        </div>
        <div className="relative overflow-hidden w-[288px] h-[288px] border-[24px] border-primary300 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.6)]">
          <img src={ImgExercise} className="absolute z-[-1] grayscale" alt="" />
          <div>MY EXERCISE</div>
          <TEXT>自分の運動の記録</TEXT>

        </div>
        <div className="relative overflow-hidden w-[288px] h-[288px] border-[24px] border-primary300 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.6)]">
          <img src={ImgDiary} className="absolute z-[-1] grayscale" alt="" />
          <div>MY DIARY</div>
          <TEXT>自分の日記</TEXT>

        </div>
      </div>
      <div className="mt-[58px] bg-dark600  py-4">
        <div className="px-6 flex gap-7 font-Inter font-[400] text-white">
          <div className=" text-[15px] ">
            <div>BODY</div>
            <div>RECORD</div>
          </div>
          <div className="text-[22px]">2021.05.21</div>
        </div>
        <div className="h-[250px]">
          <ChartComponent width={10000} height={10000} />
        </div>
        <div className="sort-tabs px-8 flex gap-4 font-Hiragino font-[300] ">
          <div className={`tabs-index px-5  rounded-[11px]  ${sortIndex === 1 ? "bg-primary300 text-white" : "bg-white text-primary300"}`} onClick={()=> setSortIndex(1)}>日</div>
          <div className={`tabs-index px-5  rounded-[11px]  ${sortIndex === 2 ? "bg-primary300 text-white" : "bg-white text-primary300"}`} onClick={()=> setSortIndex(2)}>週</div>
          <div className={`tabs-index px-5  rounded-[11px]  ${sortIndex === 3 ? "bg-primary300 text-white" : "bg-white text-primary300"}`} onClick={()=> setSortIndex(3)}>月</div>
          <div className={`tabs-index px-5  rounded-[11px]  ${sortIndex === 4 ? "bg-primary300 text-white" : "bg-white text-primary300"}`} onClick={()=> setSortIndex(4)}>年</div>
        </div>
      </div>
      <Exercises className="mt-[56px]" />
    </div>
  );
};

export default PersonalSchedule;
