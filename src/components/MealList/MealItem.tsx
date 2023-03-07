import React from 'react'
import ImgMeal from '../../assets/img/m01.jpg'

const MealItem = () => {
  return (
    <div className='relative'>
        <img src={ImgMeal} className='w-full object-cover' alt="" />
        <div className="font-Inter text-white text-[15px] bg-primary300 py-1 px-2 inline-flex gap-1 absolute bottom-0 left-0">
            <span>05.21</span>
            <span>Morning</span>
        </div>
    </div>
  )
}

export default MealItem