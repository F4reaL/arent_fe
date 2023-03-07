import React from "react";
import ImgBodyRecord from "../assets/img/MyRecommend-1.jpg"
import ImgExercise from "../assets/img/MyRecommend-2.jpg"
import ImgDiary from "../assets/img/MyRecommend-3.jpg"
const PersonalSchedule = () => {
  return (
    <div className="px-[160px]">
      <div className="flex gap-12">
        <div className="relative overflow-hidden w-[288px] h-[288px] border-[24px] border-primary300 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.6)]">
            <img src={ImgBodyRecord} className="absolute z-[-1] grayscale" alt="" />
        </div>
        <div className="relative overflow-hidden w-[288px] h-[288px] border-[24px] border-primary300 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.6)]">
            <img src={ImgExercise} className="absolute z-[-1] grayscale" alt="" />
        </div>
        <div className="relative overflow-hidden w-[288px] h-[288px] border-[24px] border-primary300 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.6)]">
            <img src={ImgDiary} className="absolute z-[-1] grayscale" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PersonalSchedule;
