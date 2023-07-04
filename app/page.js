import React from "react"

import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '@/components/NavBar'
import HeroBanner from "@/components/HeroBanner"
import SectionTwo from "@/components/SectionTwo"
export default function Home() {
  return (
   <React.Fragment>
      <main className="min-h-screen py-6 bg-white">
         <NavBar />
         <HeroBanner />
         <SectionTwo />
      </main>
   </React.Fragment>
  )
}
