import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}: any) => {
  return (
    <div>
        <Header />
        <main className='mt-16 mb-16 '>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout