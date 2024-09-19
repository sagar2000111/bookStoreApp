import React from 'react'
import Navbar from './src/Component/navbar'
import Banner from './src/Component/Banner'
import Freebook from './src/Component/Freebook'
import Footer from './src/Component/Footer'

function Home() {
  return (
    <>
    <div>
      <Navbar />
      <Banner />
      <Freebook/>
      <Footer />
    </div>
    </>
  )
}

export default Home