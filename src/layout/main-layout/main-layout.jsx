import React from 'react'
import { Header } from '../header/header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../footer/footer'

export const MainLayout = () => {
  return (
    <div className='main-wrapper'>
        <div>
            <Header/>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
