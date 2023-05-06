import React from 'react'
import "flowbite";

import  { AiFillStar } from "react-icons/ai"
import { Card } from "flowbite-react";
export const CommentCard = (props) => {
  return (
    <Card className='w-[70%]' href="#">
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {props.author}
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    {props.date}
  </p>
  <h3 className="font-normal text-gray-700 dark:text-gray-400">
    {props.comment}
  </h3>
  
  <div className='flex items-center flex-row'>
  {
      Array.from({length: props.rating}, (_, index) => index + 1).map(function () {
          return <AiFillStar className='mx-2 text-2xl text-yellow-300'/>;
        })}
</div>
  
</Card>
  )
}
