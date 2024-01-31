import React , { useState } from 'react'
import './App.css'
import {Route , Routes} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App