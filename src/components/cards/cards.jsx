import React from 'react'
import { Link } from 'react-router-dom'

export const Cards = ({ data, title }) => {
    return (
        <div className='pt-12'>
            <div className='flex gap-5 items-end'>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <p className='font-semibold'>Bce товары </p>
            </div>
            <div className='flex justify-between pt-12'>
                {
                    data.map((item, index) => {
                        return (
                            <Link to={`xit_products/${item.id}`}>
                                <div key={index} className='flex flex-col gap-4 w-[330px] h-[596px] border-2 border-[#EAEAF0] p-4 justify-between'>
                                    <div className='flex flex-col gap-2'>
                                        <img src={item.img} alt="img" />
                                        <p>{item.avtor}</p>
                                        <p className='text-[20px] font-semibold'>{item.discription}</p>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex gap-2'>
                                            <img src={item.stars} alt="" />
                                            <p>{item.commens_number}</p>
                                        </div>

                                        <div className='flex justify-between'>
                                            <div>
                                                <p className='line-through  text-[#838688] text-[16px] font-semibold'>{item.old_price}</p>
                                                <p className='text-[24px] font-bold'>{item.price}</p>
                                                <div className='flex gap-2 items-center bg-[#F37748] rounded-2xl px-[4px] py-[3px]'>
                                                    <p className='text-[12px] font-bold bg-white rounded-xl px-[5px]'>{item.sale}</p>
                                                    <p className='text-[12px] font-bold text-white'>{item.sale_price}</p>
                                                </div>
                                            </div>

                                            <div>
                                                <p>icons</p>
                                            </div>
                                        </div>

                                        <div className='flex gap-3 items-center'>
                                            <button className='p-[10px] text-[#4878A6] font-bold border border-[#4878A6] w-[228px]'>{item.button_value}</button>
                                            <p>icon</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
