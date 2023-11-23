import Link from 'next/link'
import React from 'react'

const Products = () => {
  return (
    <div>
    <div>Products</div>
    <Link href='/products/mac'> Go to Mac</Link>
    </div>
  )
}

export default Products