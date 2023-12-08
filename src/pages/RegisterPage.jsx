import React, { Fragment, useEffect, useState } from 'react'
import Topnav from '../component/Topnav/Topnav'
import Footer from '../component/Footer/Footer'
import Register from '../component/User/Register'



function RegisterPage() {

  

  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
        <Topnav title="Register"/>
         <Register/>
        <Footer/>
    </Fragment>
  )
}

export default RegisterPage
