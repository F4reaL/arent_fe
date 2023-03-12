import React, { useState } from "react";
import Cols from '../components/Cols'
const ColList = () => {
  const [tabIndex, setTabIndex]= useState<number>(1)
  return (
    <div className="px-[160px] pt-[56px]">
      <div className="grid grid-cols-4 gap-4 xl:gap-8">
        <div className="bg-dark600 text-center pt-6 pb-[22px]">
          <div className="font-Inter font-[400] text-primary300 text-[22px] mb-[8px] leading-[27px]">
            RECOMMENDED COLUMN
          </div>
          <hr className="w-[56px] m-auto" />
          <div className="mt-2 tab-col-text font-Hiragino font-[300] text-[18px] text-white">
            オススメ
          </div>
        </div>
        <div className="bg-dark600 text-center pt-6 pb-[22px]">
          <div className="font-Inter font-[400] text-primary300 text-[22px] mb-[8px] leading-[27px]">
            RECOMMENDED DIET
          </div>
          <hr className="w-[56px] m-auto" />
          <div className="mt-2 tab-col-text font-Hiragino font-[300] text-[18px] text-white">
            ダイエット
          </div>
        </div>
        <div className="bg-dark600 text-center pt-6 pb-[22px]">
          <div className="font-Inter font-[400] text-primary300 text-[22px] mb-[8px] leading-[27px]">
            RECOMMENDED BEAUTY
          </div>
          <hr className="w-[56px] m-auto" />
          <div className="mt-2 tab-col-text font-Hiragino font-[300] text-[18px] text-white">
            美容
          </div>
        </div>
        <div className="bg-dark600 text-center pt-6 pb-[22px]">
          <div className="font-Inter font-[400] text-primary300 text-[22px] mb-[8px] leading-[27px]">
            RECOMMENDED HEALTH
          </div>
          <hr className="w-[56px] m-auto" />
          <div className="mt-2 tab-col-text font-Hiragino font-[300] text-[18px] text-white">
            健康
          </div>
        </div>
      </div>
      <Cols className="mt-[56px]"/>
    </div>
  );
};

export default ColList;
