import React from 'react'

interface IProps{
    className: string
}
const index = ({className}: IProps) => {
  return (
    <div className={`bg-dark600 ${className}`}>
         <div className="px-6 flex gap-7 font-Inter font-[400] text-white">
          <div className=" text-[15px] ">
            <div>MY</div>
            <div>EXERCISE</div>
          </div>
          <div className="text-[22px]">2021.05.21</div>
        </div>
    </div>
  )
}

export default index