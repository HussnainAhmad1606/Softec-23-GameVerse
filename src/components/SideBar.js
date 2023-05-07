import React from 'react'
import "flowbite";
import { Sidebar, HiChartPie, HiViewBoards, HiInbox } from 'flowbite-react';
function SideBar() {
  return (
    <div className="w-fit">
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="#"
            icon={HiChartPie}
          >
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiViewBoards}
            label="Pro"
            labelColor="alternative"
          >
            Kanban
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiInbox}
            label="3"
          >
            Inbox
          </Sidebar.Item>
         
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  </div>
  )
}

export default SideBar