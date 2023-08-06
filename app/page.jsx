'use client'

import Header from '@/components/Header'
import SidebarLeft from '@/components/SidebarLeft';
import SidebarRight from '@/components/SidebarRight';
import Image from 'next/image'
import { useState, useEffect} from "react"

export default function Home() {


  return (
    <>
      <Header /> 
      <SidebarLeft />
      <SidebarRight />
    </>
  )
}
