"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
 function AdminPanel() {
const router = useRouter();
    return (
    <>
    <button onClick={()=> {
        router.push("/admin/products")
    }} className="text-red-500">Products</button>
    </>
  )
}

export default AdminPanel;
