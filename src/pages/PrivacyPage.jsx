import React, { Fragment, useEffect } from 'react'
import Topnav from '../component/Topnav/Topnav'
import PageTop from '../component/PageTop/PageTop'
import Footer from '../component/Footer/Footer'
import Privacy from '../component/Privacy/Privacy'
function PrivacyPage() {

     



    useEffect(() => {
        window.scroll(0,0);
    
        
      }, []);

  return (
    
    <Fragment>
        <Topnav title="Privacy"/>
        <PageTop pagetitle="Privacy Policy"/>
        <Privacy/>
        <Footer/>
    </Fragment>
  )
}

export default PrivacyPage
