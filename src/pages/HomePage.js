import React, { Fragment, useEffect } from 'react'
import Topnav from '../component/Topnav/Topnav'
import TopBanner from '../component/TopBanner/TopBanner'
import About from '../component/About/About'
import Product from '../component/Product/Product'
import Footer from '../component/Footer/Footer'
import APPUrl from '../RestAPI/APPUrl';
import axios from 'axios';
function HomePage(props) {
  
  

  
  useEffect(() => {
    window.scroll(0,0);
    GetVisitorDetails()
    
  }, []);


  let GetVisitorDetails=()=>{
    axios.get(APPUrl.Visitor).then().catch()
        
      
      
  
  }
  return (
   <Fragment>
    <Topnav title="Home"/>
    <TopBanner/>
    <About/>
    <Product/>
    <Footer/>
   </Fragment>
  )
}

export default HomePage