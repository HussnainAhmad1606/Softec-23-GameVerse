
"use client"
import React, {useState, useEffect} from 'react'
import "flowbite";
import { Spinner } from 'flowbite-react';
import { ProductComp } from '../../components/ProductComp';
function page() {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
      fetch(`${NEXT_PUBLIC_URL}/api/product/gameProducts`)
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
        <center>

            <h1 className='my-4'>Game Products</h1>
        </center>



    
       { allProducts.length == 0? <Spinner className='flex justify-center w-full'/>:
        allProducts.map((product, index) => {
            return <ProductComp key={index} item={product} title={product.title} slug={product.slug} price={product.price} stock={product.inStock} description={product.description} image={product.image} />
        }) 
      }
        </div>
  )
}

export default page