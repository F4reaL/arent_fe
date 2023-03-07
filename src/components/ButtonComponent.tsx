import React from 'react'

interface IProps{
    children: HTMLElement | string
}
const ButtonComponent = ({children}:IProps) => {
  return (
    <button className='btn-linear font-Hiragino text-[18px]'>{children as String}</button>
  )
}

export default ButtonComponent