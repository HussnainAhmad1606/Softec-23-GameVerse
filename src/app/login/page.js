"use client"
import React from 'react'
import "flowbite";
import { TextInput, Label, Button, Textarea } from "flowbite-react";
import { ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const page = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        toast.success('Logged In Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <div className='h-200 mx-4 my-4' style={{
        margin: "50px"
    }}>
   <h1>Login to the Account</h1>
   <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
      placeholder=""
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

  <Button  type="submit">
    Login
  </Button>
</form>
   </div>
      </>
  )
}

export default page;
