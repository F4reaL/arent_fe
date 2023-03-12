import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}: any) => {
  return (
    <div>
        <Header />
        <main className='mt-16 mb-16 '>{children}</main>
        <Footer/>
        <ScrollToTop />
    </div>
  )
}

export default Layout