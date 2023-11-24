import React from 'react' 

interface Product {
    id: string;
    name: string;
    price: string;
}

const Products = async() => {
  const response = await fetch("https://6560e3f083aba11d99d1ab56.mockapi.io/users")
  const products: Product[] = await response.json()
  console.log(products)
    return (
    <div className='mx-auto max-w-2xl px-8 py-16'>
        <h1 className='text-2xl text-[#ff612f]'>Products ({products?.length})</h1>
    
        <div className='w-full- mt-8'>{products.map((product) => (
            <div key={product.id} className='flex items-center justify-between bg-[#777778] rounded-md p-4 my-4 text-sm text-[#ff612f]'>
                <span>{product.name}</span>
                <span className='text-xl'>$ {product.price}</span>
            </div>
        ))}

        </div>
    </div>
  )
} 

export default Products