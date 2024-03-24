import React from 'react'

import LandingPage from './Pages/LandingPage'
import Navbar from './Components/NavbarAndContent/Navbar.jsx'
import Content from './Components/NavbarAndContent/Content.jsx'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <>
      <HelmetProvider>
        {/* <!-- purgecss start ignore --> */}
        <Navbar />
        <Content />
        <LandingPage />
        {/* <!-- purgecss end ignore --> */}
      </HelmetProvider>
    </>
  )
}

export default App
