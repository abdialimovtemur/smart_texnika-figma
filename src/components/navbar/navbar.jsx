import React from 'react'
import { Link } from 'react-router-dom'
import { Hamburger_icon } from '../../assets/icons/hamburger_icon'

export const Navbar = () => {
  return (
    <div className='flex bg-[#0E1821] h-16 gap-12'>
        <div className='flex gap-4 items-center bg-[#243C53] w-[339px] justify-start pl-6'>
            <Hamburger_icon/>
            <p className='text-white'>Каталог товаров</p>
        </div>
        <div className='flex gap-12 items-center text-white'>
            <Link to={"/hozirchabosh"}>O компании</Link>
            <Link to={"/hozirchabosh"}>Акции</Link>
            <Link to={"/hozirchabosh"}>Рассрочка 0|0|18</Link>
            <Link to={"/hozirchabosh"}>Сервис и гарантия</Link>
            <Link to={"/hozirchabosh"}>Опт/дропшиппинг</Link>
            <Link to={"/hozirchabosh"}>Контакты</Link>
        </div>
    </div>
  )
}
