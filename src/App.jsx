// Jai Shree Ram

import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import NotFound from './pages/notfound/NotFound'

function App() {



  // changing title of the page 

  useEffect(() => {
      const basename = "Dairy."
      const path = window.location.pathname;
      const pageName =
        path === "/"
          ? "Home"
          : path.slice(1).charAt(0).toUpperCase() + path.slice(2);

      switch (pageName) {
        case "Home":
          document.title = `Home | ${basename}`;
          break;
        case "Login":
          document.title = `Login | ${basename}`;
          break;
        default:
          document.title = `404 | ${basename}`;
      }
  } , [])



  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  
  )
}

export default App