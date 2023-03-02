import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import  Layout from './Layouts'
import Home from './pages/Home'
import Challenge from './pages/Challenge'
function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/list' element={<Home/>} />
        <Route path='/challenge' element={<Challenge/>} />
        <Route path='/info' element={<Home/>} />
      </Routes>
    </Layout>
  )
}

export default App
