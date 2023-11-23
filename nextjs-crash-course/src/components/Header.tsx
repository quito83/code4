import { CupSoda } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-[#1b1b1f] w-full">
        <div className='flex items-center justify-between mx-auto max-w-6xl px-10 py-4'>
            <div className='flex items-center text-[#ff612f]'>
                <CupSoda className='w-6 h-6 mr-2' />
                <span className='font-medium'> iShop</span>
            </div>
            <div className='text-sm space-x-6 text-[#ff612f]'>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/products">Products</Link>
            </div>
        </div>Hola Hola Hola
    </header>
  )
}

export default Header