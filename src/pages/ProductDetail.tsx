import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '~/interfaces/Product'
import instance from '~/apis'
const ProductDetail = () => {
  const params = useParams()
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: '',
    thumbnail: '',
    price: 0,
    description: ''
  })
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await instance.get(`/products/${params.id}`)
      setProduct(data)
    }
    getProduct()
  }, [])
  return (
    <>
      <div>Chi tiết sản phẩm</div>
      <div>Id: {params.id}</div>
      <div>{product.id}</div>
      <div>{product.price}</div>
      <div>{product.rating}</div>
      <img src={product.thumbnail} />
    </>
  )
}

export default ProductDetail
