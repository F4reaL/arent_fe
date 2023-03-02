import React from 'react'
import Header from './Header'

const Layout = ({children}: any) => {
  return (
    <div>
        <Header />
        <main className='mt-16'>{children}</main>
    </div>
  )
}

export default Layout