import React, { Fragment, useEffect } from 'react'
import Topnav from '../component/Topnav/Topnav'
import PageTop from '../component/PageTop/PageTop'
import Footer from '../component/Footer/Footer'
import RefundDesc from '../component/RefundDesc/RefundDesc'
function RefundPage() {
  
  useEffect(() => {
    window.scroll(0,0);

    
  }, []);


  return (
    <Fragment>
        <Topnav title="Refund"/>
        <PageTop pagetitle="Refund Policy"/>
        <RefundDesc/>
        <Footer/>
    </Fragment>
  )
}

export default RefundPage
