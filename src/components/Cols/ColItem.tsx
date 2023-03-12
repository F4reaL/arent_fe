import React from 'react'
import IMG from '../../assets/img/column-1.jpg'
const ColItem = () => {
  return (
    <div>
        <div className='relative'>
            <img src={IMG} alt="" className='w-full object-cover' />
            <div className='w-[144px] px-2 absolute bottom-0 left-0 bg-primary300 text-white font-Inter font-[400] text-[15px] leading-[24px] flex justify-between '><span>2021.05.17</span>   <span>23:25</span></div>
        </div>
        <div className='font-Hiragino font-[300] text-dark500 text-[15px] line-clamp-2'>魚を食べて頭もカラダも元気に魚を食べて頭もカラダも元気に魚を食べて頭もカラダも元気に魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</div>
        <div className='font-Hiragino font-[300] text-primary400 text-[12px]'>#魚料理  #和食  #DHA</div>
    </div>
  )
}

export default ColItem