import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout/MainLayout'
import HomePage from "./components/pages/HomePage/HomePage"
import ShopPage from "./components/pages/ShopPage/ShopPage"
import PlantCarePage from "./components/pages/PlantCarePage/PlantCarePage"
import BlogsPage from "./components/pages/BlogsPage/BlogsPage"
import Page404 from "./components/pages/404Page/Page404"
import AuthLayout from './components/layouts/AuthLayout/AuthLayout'



export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
              <Route index  element={<Navigate to="/home" />}/>
              <Route path='home' element={<HomePage />}/>
              <Route path='shop' element={<ShopPage />}/>
              <Route path='plantCare' element={<PlantCarePage />}/>
              <Route path='blogs' element={<BlogsPage />}/>
        </Route>
        <Route path='*'  element={<Page404 />}/>
        <Route path='/login'  element={<AuthLayout />}/>
      </Routes>
    </>
  )
}
