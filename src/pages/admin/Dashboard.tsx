import React from 'react'
import FormAdmin from '~/components/Form/FormAdmin'
import { Product } from '~/interfaces/Product'

type Props = {
  product: Product[]
}
const Dashboard = ({ product }: Props) => {
  console.log(product)

  return (
    <>
      <FormAdmin />
      {/* <h1>Test</h1> */}
    </>
  )
}

export default Dashboard
