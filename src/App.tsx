import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import  Layout from './Layouts'
import Home from './pages/Home'
import ColList from './pages/ColList'
import MyRecords from './pages/MyRecords'
import NotFoundPage from './components/404NotFound'
function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/records' element={<MyRecords/>} />
        <Route path='/col-list' element={<ColList/>} />
        <Route path='/info' element={<NotFoundPage/>} />
        <Route path='/:slug' element={<NotFoundPage/>} />
      </Routes>
    </Layout>
  )
}

export default App
