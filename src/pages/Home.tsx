import React from "react";
import { CircularProgressbarWithChildren , buildStyles } from "react-circular-progressbar";
import BGIMG from "../assets/img/d01.jpg";
import ChartComponent from "../components/ChartComponent";

const Home = () => {
  const percentage: number = 75;
  return (
    <>
      <div className="flex ">
        <div className="relative max-h-[312px] overflow-hidden shrink-0">
          <img
            src={BGIMG}
            alt=""
            className="w-full scale-110 translate-y-[-4rem] object-contain "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <CircularProgressbarWithChildren 
              className="w-[181px] h-[181px]"
              value={percentage}
              strokeWidth={2}
              styles={buildStyles({
                strokeLinecap: 'round',
                pathColor: `#FFFFFF`,
                textColor: "#FFFFFF",
                trailColor: "",
              })}
            >
              <div className="font-Inter  text-[#ffffff] ">
                <span className=" text-[18px] mr-1" style={{"textShadow":"0px 0px 6px #FC7400"}}>05/21</span>
                <span className="text-[25px]" style={{"textShadow":"0px 0px 6px #FCA500"}}>{percentage}%</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="w-full max-h-[312px] bg-dark600">
          <ChartComponent />
        </div>
      </div>
    </>
  );
};

export default Home;
