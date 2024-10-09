import React from 'react'
import logo from "../../assets/imgs/logo.svg"
import { Link } from 'react-router-dom'
import { Search_icon } from '../../assets/icons/search_icon'
import { Like_icon } from '../../assets/icons/like_icon'
import { Statistic_icon } from '../../assets/icons/statistic_icon'
import { Cart_icon } from '../../assets/icons/cart_icon'
import { Eye_icon } from '../../assets/icons/eye_icon'
import { Navbar } from '../../components/navbar/navbar'

export const Header = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between items-center py-6'>
                <Link to={"/"}>
                    <img src={logo} alt="" />
                </Link>

                <div className='flex items-center gap-20'>
                    <div className='flex gap-12'>
                        <p className='font-semibold text-[16px]'>+7 (812) 660-50-54</p>
                        <p className='font-semibold text-[16px]'>+7 (958) 111-95-03</p>
                        <p className='text-[#838688] text-[16px]'>Пн-вс: c 10:00 до 21:00</p>
                    </div>
                    <div className='flex gap-10   items-center'>
                        <div className='flex border-b border-black gap-3 w-32 pb-2'>
                            <Search_icon />
                            <input type="text" placeholder='Поиск' className='border-none outline-none w-full' />
                        </div>
                        <Eye_icon />
                        <Like_icon />
                        <Statistic_icon />
                        <Cart_icon />
                        <button className='text-white bg-[#2A5275] rounded-lg w-[99px] h-[48px]'>Войти</button>
                    </div>
                </div>
            </div>
            <div>
                <Navbar/>
            </div>
        </div>
    )
}
