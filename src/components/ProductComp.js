"use client"
import React, { useEffect, useState } from 'react';
import "flowbite";
import { Card, Button } from "flowbite-react";
import { useRouter } from 'next/navigation';





export const ProductComp = (props) => {

  const router = useRouter();
    
  return (
    <div className="inline-block mx-4 max-w-sm">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
     {props.title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     {props.description}
    </p>
    <b className=''>{props.stock?"In Stock":"Out of Stock"}</b>
    <b>{props.price}</b>

    <Button onClick={()=>{
        router.push(`/product/${props.slug}`);
    }}>
    Read more
    <svg
      className="ml-2 -mr-1 h-4 w-4"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </Button>
  </Card>
</div>
  )
}
