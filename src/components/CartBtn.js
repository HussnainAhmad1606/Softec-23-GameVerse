import React from 'react'
import "flowbite";
import { Sidebar } from "flowbite-react"
function CartBtn() {
  return (
    <div className="w-fit">
  <Sidebar aria-label="Default sidebar example">
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item
          href="#"
          
        >
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          
          label="Pro"
          labelColor="alternative"
        >
          Kanban
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          
          label="3"
        >
          Inbox
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          
        >
          Users
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          
        >
          Products
        </Sidebar.Item>
        
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
</div>
  )
}

export default CartBtn