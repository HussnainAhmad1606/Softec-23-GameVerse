"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { useState, useEffect } from 'react'
import { ProductComp } from '@/components/ProductComp'
import { Spinner } from 'flowbite-react'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/product/allProducts")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data);
        setAllProducts(data.products);
    })
  }, [])
  
  return (
    <div>

     <h1>All Products</h1>

     {
      allProducts.length == 0? <Spinner/>:
      allProducts.map((product) => {
        return <ProductComp title={product.title} slug={product.slug} price={product.price} stock={product.inStock} description={product.description} />
      })
     }
    </div>
  )
}
