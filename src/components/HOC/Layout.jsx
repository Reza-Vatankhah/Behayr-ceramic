import React from 'react'
import Header from '../Header/Header'

const Layout = (WrappedComponent) => {
  return (props)=>{
    return(
      <div>
      <Header/>
      <WrappedComponent {...props}/>
    </div>
    )
  }
}

export default Layout