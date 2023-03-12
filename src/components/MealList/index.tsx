import React, { useState } from "react";
import MealItem from "./MealItem";
import ButtonComponent from "../../components/ButtonComponent";

interface IProps{
  typeMeal: string
}
const index = ({typeMeal}: IProps) => {
console.log(typeMeal)
  switch (typeMeal) {
    case "morning":
      break;
    case "lunch":
      break;
    case "dinner":
      break;
    default:
      break;
  }
  return (
    <div className="mt-[25px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {Array(8).fill("item").map((item, index)=>
        <MealItem key={index}/>)}
      </div>
      <ButtonComponent className="mt-[28px]">記録をもっと見る</ButtonComponent>

    </div>
  );
};

export default index;
