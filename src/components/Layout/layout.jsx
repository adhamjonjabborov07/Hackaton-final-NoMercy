import React from 'react'
import Header from "../Header/header";
import Footer from "../Footer/footer";
function layout({children}) {
  return (
    <>
    <div className='container'>
        <Header/>
        {children}
        <Footer/>
    </div>
    </>
  )
}

export default layout