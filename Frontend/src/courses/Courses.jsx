import React from 'react'
import Navbar from '../Component/navbar'
import Course from '../Component/Course'
import Footer from '../Component/Footer'

function Courses() {
    
  return (
    <>
    <div>
        <Navbar />
        <div className="min-h-screen">
        <Course />
        </div>
        <Footer />
    </div>
    </>
  )
}

export default Courses