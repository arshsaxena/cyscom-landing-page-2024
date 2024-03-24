import React from 'react'
import Sample from '../Components/Sample'
import { Helmet } from 'react-helmet-async'
import Footer from '../Components/GalleryAndFooter/Footer.jsx'
import PictureGallery from '../Components/GalleryAndFooter/PictureGallery.jsx'

const LandingPage = () => {
  return (
    <div>
      <Helmet>
        <title>CYSCOM</title>
      </Helmet>

      {/* Your code goes here */}
      <PictureGallery />
      <Footer />
      {/* <Sample /> */}
    </div>
  )
}

export default LandingPage
