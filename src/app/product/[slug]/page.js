"use client"
import Timeline, { Button, Spinner, HiArrowNarrowRight } from 'flowbite-react';
import React, {useState, useEffect} from 'react'
import { FAQs } from "../../../components/FAQs"
import { CommentCard } from '../../../components/CommentCard';
import { AddReview } from '../../../components/AddReview';

function page ({params}) {
    const { slug } = params;
  const [item, setItem] = useState({})

    useEffect(() => {
      fetch(`http://localhost:3000/api/product/singleProduct/${slug}`)
      .then((response)=> response.json())
      .then((data)=>setItem(data.products))
    }, [])
    

  return (
    <>
    {
      
      
      JSON.stringify(item) !== '{}' ?  <div>
      <div className='my-4 flex justify-around items-center w-full'>
    
    {/* Breadcrumb */}
    <nav class="flex  justify-around" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
            Home
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Product</a>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{item.title}</span>
          </div>
        </li>
      </ol>
    </nav>
    
      </div>
    
    
    {/* Actual Product */}
    <div className='flex justify-center items-center w-full h-screen'>
    
      <div className='w-[70]'>
      <img style={{
        width: "40%"
      }} src={item.image} />
      </div>
    
      <div>
        <h1 className='text-2xl'>{ item.title }</h1>
        <p>{ item.description }</p>
    
        <p>Avaibility: {item.inStock==true?<span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Available</span>:<span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Not Available</span>}</p>
    
        <Button className='mx-2'>Buy Now</Button>
      </div>
    </div>
    
    
    
    <FAQs/>
    
    
    
    {/* Reviews */}
    <center>
      <h1 className='my-4'>Reviews</h1>
    </center>
    <div className='w-full flex justify-around items-center'>
    <CommentCard author="Psycho" rating={5} date="12:45 PM - 5 July, 2023" comment="Good"/>
    </div>

    
    <AddReview/>
      </div>
      
      :  <Spinner className='flex justify-center w-full'/>
    }    
    </>
    )
}

export default page;
