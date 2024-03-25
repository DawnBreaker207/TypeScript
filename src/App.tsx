import React from 'react'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductDetail from './pages/ProductDetail'
import Banner from './components/Banner/Banner-Boostrap'

const App = () => {
  return (
    <>
      <Header />
      {/* <Banner /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Products />} />
        <Route path='/shop/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
