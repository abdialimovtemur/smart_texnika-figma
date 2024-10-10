import React from 'react';
import datas from "../../data/data"
import hero from '../../assets/imgs/hero_slider.svg';
import { Cards } from '../../components/cards/cards';
import Product_info from './components/product/product_info';
import Product_read from './components/product_read/product_read';


export const Home = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-4 w-[340px] bg-[#EDF2F6] pl-6 pt-8'>
                    {datas.katalog.map((item) => (
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

            <Cards data={datas.xit_products} title={'Хиты продаж'} />
            <Cards data={datas.new_products} title={'Новинки'} />

            <div className='flex justify-between pt-12'>
                {datas.product_info.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <Product_info discription={item.discription} img={item.img} />
                        </div>
                    )
                })}
            </div>

            <Cards data={datas.products_sigve} title={'Сигвеи'} />
            <Cards data={datas.products_monocolesa} title={'Моноколеса'} />

            <div className='flex justify-between pt-12'>
                {datas.product_info_bottom.map((item) => {
                    return (
                        <div key={item.id}>
                            <Product_info discription={item.discription} img={item.img} />
                        </div>
                    )
                })}
            </div>

            <Cards data={datas.products_velo} title={'Электровелосипеды'} />

            <div className='flex justify-between pt-12'>
                {datas.product_read.map((item) => {
                    return (
                        <div key={item.id}>
                            <Product_read title={item.title} discription={item.discription} see={item.see} date={item.date} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
