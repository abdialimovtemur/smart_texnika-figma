import React from 'react'
import logo from '../../assets/imgs/logo.svg'

export const Footer = () => {
    return (
        <div className='pt-12'>
            <div className='flex justify-between bg-[#EDF2F6]'>
                <div>
                    <img src={logo} alt="logo" />
                    <div>
                        <p>+7 (958) 111-95-03</p>
                        <p>+7 (812) 660-50-54</p>
                        <p>Пн-вс: c 10:00 до 21:00</p>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <p>Проспект Стачек 67 к.5</p>
                        <p>Лиговский проспект 205</p>
                        <p>Гражданский проспект, 116 к.5</p>
                    </div>
                </div>

                <div>
                    <p>Для клиента</p>
                    <p>Как купить</p>
                    <p>Доставка и оплата</p>
                    <p>Кредит</p>
                    <p>Политика конфиденциальности</p>
                    <p>Вопросы и ответы (F.A.Q.)</p>
                    <p>Сервис и гарантия</p>
                </div>

                <div>
                    <p>O магазине</p>
                    <p>Отзывы</p>
                    <p>Наши преимущества</p>
                    <p>История компании</p>
                    <p>Сотрудничество</p>
                    <p>Партнёрская программа</p>
                    <p>Вакансии</p>
                </div>

                <div>
                    <p>Сотрудничество</p>
                    <p>Оптом</p>
                    <p>Дропшиппинг</p>
                </div>
            </div>




            <div></div>
        </div>
    )
}
