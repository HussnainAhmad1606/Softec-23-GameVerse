import React from 'react'
import "flowbite"
import { Carousel } from "flowbite-react"; 
import {Car1} from "/public/car-1.jpg"
import Image from 'next/image';
export const CarouselComp = () => {
  return (
    <div className="h-screen sm:h-screen xl:h-screen 2xl:h-screen">
  <Carousel slide={false}>
    <Image src={`/car-1.jpg`} height={1000} width={1000}/>
    <Image src={`/car-2.jpg`} height={1000} width={1000}/>
    <Image src={`/car-3.jpg`} height={1000} width={1000}/>
    
  </Carousel>
</div>
  )
}
