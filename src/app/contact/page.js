"use client"
import React from 'react'
import "flowbite";
import { TextInput, Label, Button, Textarea } from "flowbite-react";
const page = () => {
  return (
    <div className='continer mx-4 my-4' style={{
        margin: "50px"
    }}>
    <h1>Contact Us</h1>
    <form className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email1"
        value="Your email"
      />
    </div>
    <TextInput
      id="email1"
      type="email"
      placeholder="Your Email"
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password1"
        value="Your password"
      />
    </div>
    <TextInput
      id="password1"
      type="password"
      required={true}
    />
  </div>

  <div id="textarea">
  <div className="mb-2 block">
    <Label
      htmlFor="comment"
      value="Your message: "
    />
  </div>
  <Textarea
    id="comment"
    placeholder="Leave a comment..."
    required={true}
    rows={4}
  />
</div>
  
  <Button type="submit">
    Submit
  </Button>

</form>
   </div>
  )
}

export default page;
