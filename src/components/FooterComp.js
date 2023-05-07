"use client"
import React from 'react'
import "flowbite";
import { Footer } from 'flowbite-react';
function FooterComp() {
  return (
    <Footer container={true}>
    <Footer.Copyright
      href="#"
      by="GameVerse™"
      year={2023}
    />
    <Footer.LinkGroup>

    <Footer.Link href="/">
        Home
      </Footer.Link>


      <Footer.Link href="/about">
        About
      </Footer.Link>
      <Footer.Link href="/contact">
        Contact
      </Footer.Link>
      
    </Footer.LinkGroup>
  </Footer>
  
  )
}

export default FooterComp