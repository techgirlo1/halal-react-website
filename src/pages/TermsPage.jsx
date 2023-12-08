import React, { Fragment, useEffect } from 'react'
import Topnav from '../component/Topnav/Topnav'
import PageTop from '../component/PageTop/PageTop'
import Footer from '../component/Footer/Footer'
import Terms from '../component/Terms/Terms'
function TermsPage() {

  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
        <Topnav title="Term"/>
        <PageTop pagetitle="Terms and Condition"/>
        <Terms/>
        <Footer/>
    </Fragment>
  )
}

export default TermsPage
