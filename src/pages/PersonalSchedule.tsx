import React from "react";
import ImgBodyRecord from "../assets/img/MyRecommend-1.jpg";
import ImgExercise from "../assets/img/MyRecommend-2.jpg";
import ImgDiary from "../assets/img/MyRecommend-3.jpg";
const PersonalSchedule = () => {
  const TEXT = ({children}: any) =>{
   return <div className="font-Hiragino font-[300] text-white text-[14px] w-[160px] text-center bg-primary400 py-[1.5px]">{children}</div>  
  }
  return (
    <div className="pt-[56px] px-[160px]">
      <div className=" flex gap-12 font-Inter text-[25px] text-primary300">
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
    </div>
  );
};

export default PersonalSchedule;
