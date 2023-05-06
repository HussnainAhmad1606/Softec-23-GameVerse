import React from 'react';
import "flowbite";
import Link from "next/link"
import { Accordion } from "flowbite-react";

export const FAQs = () => {
  return (
    <div className='flex justify-center items-center w-full flex-col h-screen'>
<h1 className='my-4 text-2xl' style={{
  fontSize: "25px"
}}>Product FAQs</h1>
    <Accordion className='w-[70%]' collapseAll={true}>
    <Accordion.Panel>
      <Accordion.Title>
        What is the delivery time of the product?
      </Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          The delivery time of the product depends on your location from the buyer. Typically it will take 7-10 Days to deliver your order
        </p>
        
      </Accordion.Content>
    </Accordion.Panel>
   
    <Accordion.Panel>
      <Accordion.Title>
        What are Return Policies?
      </Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          The return policy is of 7 days. For more info: you can read our Return Policy <Link href={"#"}>Here</Link>
        </p>
        
      </Accordion.Content>
    </Accordion.Panel>
   
  </Accordion>
     </div>
  )
}
