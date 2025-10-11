import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function PageLayout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default PageLayout