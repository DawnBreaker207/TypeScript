import { Routes, Route } from 'react-router-dom'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Product from '~/components/Product'
import ProductList from '~/components/ProductList'
import NotFound from './NotFound'

const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/products' element={<ProductList />} />
        {/* <Route path='/products/detail' element={<Product />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Home
