import React, { Fragment, useEffect, useState } from 'react'
import Topnav from '../component/Topnav/Topnav'
import Login from '../component/User/Login'
import Footer from '../component/Footer/Footer'
import Reset from '../component/User/Reset';



function ResetPage() {

  

  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
        <Topnav title="resetpassword"/>

        <Reset/>
        <Footer/>
    </Fragment>
  )
}

export default ResetPage
