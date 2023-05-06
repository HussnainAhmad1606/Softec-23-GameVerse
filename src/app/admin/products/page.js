"use client"
import { ProductComp } from '@/components/ProductComp';
import "flowbite"
import { Spinner, Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
function Products() {
  const router = useRouter();
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
fetch("http://localhost:3000/api/product/allProducts")
.then(response => response.json())
.then(data => setAllProducts(data.products))
    }, [])
  return (
    <>
    <Button onClick={()=> {
router.push("/admin/products/add-product")
    }}>Add New Product</Button>
{
    
       allProducts.length == 0? <Spinner />:
       
        allProducts.map((product) => {
          return <ProductComp title={product.title} slug={product.slug} price={product.price} description={product.description} />
      })
       
    }





    </>
  )
}

export default Products;
