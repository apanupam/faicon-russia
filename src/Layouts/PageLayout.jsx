import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

function PageLayout() {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default PageLayout