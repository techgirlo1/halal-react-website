import React, { Fragment, useEffect } from 'react'
import Topnav from '../component/Topnav/Topnav'
import PageTop from '../component/PageTop/PageTop'
import Contact from '../component/Contact/Contact'
import Footer from '../component/Footer/Footer'

function ContactPage() {

  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
        <Topnav title="Contact"/>
        <PageTop pagetitle="Contact Us"/>
        <Contact/>
        <Footer/>
    </Fragment>
  )
}

export default ContactPage
