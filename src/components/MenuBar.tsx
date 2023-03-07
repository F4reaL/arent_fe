import React, { SetStateAction } from "react";
import IconKnife from "../assets/img/icon_knife.png"
import IconCup from "../assets/img/icon_cup.png"
interface IProps{
  setTypeMeal: React.Dispatch<SetStateAction<string>>
  curType: string
}
const MenuBar = ({setTypeMeal,curType}: IProps) => {
  const handleSetType = (e: any)=>{
    let value = e.currentTarget.textContent.toLowerCase()
    setTypeMeal(value)
    if(value == curType) setTypeMeal("all")
  }
  return (
    <div className="mt-[22px] flex justify-center gap-[84px] font-Inter text-[20px] text-white">
      <button className="btn-polygon w-[116px] h-[134px] flex flex-col gap-[2px]  justify-center items-center" onClick={handleSetType }>
        <img src={IconKnife} alt="" />
        Morning
      </button>
      <button className="btn-polygon w-[116px] h-[134px] flex flex-col gap-[2px]  justify-center items-center" onClick={handleSetType}>
        <img src={IconKnife} alt="" />
        Lunch
      </button>
      <button className="btn-polygon w-[116px] h-[134px] flex flex-col gap-[2px]  justify-center items-center" onClick={handleSetType}>
        <img src={IconKnife} alt="" />
        Dinner
      </button>
      <button className="btn-polygon w-[116px] h-[134px] flex flex-col gap-[2px]  justify-center items-center" onClick={handleSetType}>
        <img src={IconCup} alt="" />
        Snack
      </button>
    </div>
  );
};

export default MenuBar;
