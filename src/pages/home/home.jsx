import React from 'react';
import datas from "../../data/data"
import hero from '../../assets/imgs/hero_slider.svg';
import { Cards } from '../../components/cards/cards';

export const Home = () => {
    return (
        <div className=''>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-4 w-[340px] bg-[#EDF2F6] pl-6 pt-8'>
                    {datas.katalog.map((item, index) => (
                        <div key={item.id} className='flex gap-5'>
                            <img src={item.img} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
                {/* Hero rasm */}
                <div className='pt-8'>
                    <img src={hero} alt="Hero Slider" />
                </div>
            </div>

            <Cards data={datas.xit_products} title={'Хиты продаж'}/>
            <Cards data={datas.new_products} title={'Новинки'}/>
        </div>
    );
};
