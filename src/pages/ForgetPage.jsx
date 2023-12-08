import React, { Fragment, useEffect, useState } from 'react'
import Topnav from '../component/Topnav/Topnav'
import Footer from '../component/Footer/Footer'
import Forget from '../component/User/Forget'



function ForgetPage() {

  

  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
        <Topnav title="ForgetPassword"/>

        <Forget/>
        <Footer/>
    </Fragment>
  )
}

export default ForgetPage
