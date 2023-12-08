import React, { Fragment, useEffect } from 'react'
import Topnav from '../component/Topnav/Topnav'
import PageTop from '../component/PageTop/PageTop'
import Productdetails from '../component/Productdetails/Productdetails'
import Footer from '../component/Footer/Footer'

function ProductPage() {

  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
return (
    <Fragment>
        <Topnav title="Product"/>
        <PageTop pagetitle="Our Products"/>
        <Productdetails/>
        <Footer/>
    </Fragment>
  )
}

export default ProductPage
