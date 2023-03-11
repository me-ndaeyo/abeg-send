import React from 'react'
import DownloadForm from '../components/DownloadForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
        <Navbar/>
        <DownloadForm/>
        <Footer/>
    </div>
  )
}

export default Home