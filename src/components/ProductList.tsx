import { useState, useEffect } from 'react'
import axios from 'axios'
import { getAllProducts } from '~/apis/product'
const ProductList = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    ;(async () => {
      const data = await getAllProducts()
      setProduct(data)
    })()
  }, [])
  return (
    <>
      <ul className='grid grid-cols-4 md:grid-cols-3 gap-5 m-10'>
        {product.map(({ id, title, description, category, thumbnail, price }) => {
          return (
            <li key={id} className='text-gray-700 bg-white shadow-md bg-clip-border rounded-xl '>
              <div className='relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96'>
                <img src={thumbnail} alt='' className='object-cover w-full h-full' />
              </div>
              <div className='p-6'>
                <div className='flex items-center justify-between mb-2'>
                  <p className='block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900'>
                    {title}
                  </p>
                  <p className='block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900'>
                    Price: {price}
                  </p>
                </div>
                <div className='font-sans font-semibold my-2 text-gray-700'>Category: {category}</div>
                <div className='block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75'>
                  Description: {description}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ProductList
