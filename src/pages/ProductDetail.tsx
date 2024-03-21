import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '~/interfaces/Product'
import instance from '~/apis'
const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await instance.get(`/products/${id}`)
      setProduct(data)
    }
    getProduct()
  }, [])
  return (
    <>
      <div>Chi tiết sản phẩm</div>
      <div>Id: {id}</div>
      <div>{product?.id}</div>
      <div>{product?.price}</div>
      <div>{product?.rating}</div>
      <img src={product?.thumbnail} />
    </>
  )
}

export default ProductDetail
