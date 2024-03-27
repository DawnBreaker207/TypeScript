import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductDetail from './pages/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import { Product } from './interfaces/Product'
import { getAllProducts } from './apis/product'
// import Banner from './components/Banner/Banner-Boostrap'

const App = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    ;(async () => {
      const data = await getAllProducts()
      setProducts(data)
    })()
  }, [])

  return (
    <>
      <Header />
      {/* <Banner /> */}
      <Routes>
        <Route index element={<Home product={products} />} />
        <Route path='/shop' element={<Home product={products} />} />
        <Route path='/shop/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
