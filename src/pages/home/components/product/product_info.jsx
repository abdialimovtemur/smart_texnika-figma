import React from 'react'

export const Product_info = ({discription, img}) => {
  return (
    <div className='flex justify-between bg-[#EDF2F6] px-5 py-3 h-[180px] items-center rounded-lg w-[640px]'>
        <p className='text-[28px] font-bold w-[234px]'>{discription}</p>
        <div>
            <img src={img} alt="img" />
        </div>
    </div>
  )
}

export default Product_info