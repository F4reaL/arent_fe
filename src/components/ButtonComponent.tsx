import React from "react";

interface IProps {
  children: HTMLElement | string;
  className?: string;
}
const ButtonComponent = ({ children, className }: IProps) => {
  return (
    <div className={`${className}`}>
      <button className={`btn-linear font-Hiragino text-[18px] `}>
        {children as String}
      </button>
    </div>
  );
};

export default ButtonComponent;
