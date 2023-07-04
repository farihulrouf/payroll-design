import React from "react"

import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '@/components/NavBar'
export default function Home() {
  return (
   <React.Fragment>
      <main className="min-h-screen py-6">
         <NavBar />
      </main>
   </React.Fragment>
  )
}
