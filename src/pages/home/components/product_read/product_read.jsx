import React from 'react'

export const Product_read = ({title,discription,see,date}) => {
  return (
    <div className='flex flex-col items-start justify-between bg-[#EDF2F6] px-5 py-3 h-[180px] rounded-lg w-[640px]'>
        <p className='text-[28px] font-bold '>{title}</p>
        <p>{discription}</p>
        <div className='flex gap-96 justify-between'>
            <p>{see}</p>
            <p className='text-[#838688]'>{date}</p>
        </div>
    </div>
  )
}

export default Product_read
