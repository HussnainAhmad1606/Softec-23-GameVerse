"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { useState, useEffect } from 'react'
import { ProductComp } from '../components/ProductComp'
import { Spinner } from 'flowbite-react'
import { CarouselComp } from '../components/CarouselComp'
import SideBar from '../components/SideBar'
import { CartProvider } from 'react-use-cart'
import Cart from '../components/Cart'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/product/allProducts`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data);
        setAllProducts(data.products);
    })
  }, [])
  
  return (
    <>
    <CartProvider>
    <CarouselComp/>

    <div>



     <center>
     <h1 className='my-4'>Game Products</h1>
     </center>

     {
      allProducts.length == 0?  <Spinner className='flex justify-center w-full'/>:
      allProducts.map((product, index) => {
        return <ProductComp key={index} item={product} title={product.title} slug={product.slug} price={product.price} stock={product.inStock} description={product.description} image={product.image} />
      }) 
    }
    </div>
    </CartProvider>
    </>
  )
}
