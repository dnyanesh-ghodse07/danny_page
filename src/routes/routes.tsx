import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Home from '../components/Home/Home'

const PageRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<Skills/>}/>
            <Route path='/projects' element={<Projects/>}/>
        </Routes>
    </div>
  )
}

export default PageRoutes