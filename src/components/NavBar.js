"use client"
import React, { useState } from 'react'
import { Popover, Space } from 'antd';

import "flowbite"

import { Navbar, Button, ToggleSwitch } from "flowbite-react";
import { useRouter } from 'next/navigation';
import CartBtn from "../components/CartBtn"
import { useCart } from 'react-use-cart';
// import {  } from './ToggleSwitch';
export const NavBar = () => {

  
  


  const router = useRouter();

    const [disable, setDisable] = useState(true);

  

  return (
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      GameVerse
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
 <Button onClick={() => {
  router.push("/cart");
 }}>
  Cart
  </Button>
  
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/about">
      About
    </Navbar.Link>
    <Navbar.Link href="/games">
      Games
    </Navbar.Link>
    <Navbar.Link href="/pricing">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/contact">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
  )
}
