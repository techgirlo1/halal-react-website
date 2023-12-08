import React, { Fragment, useEffect } from 'react'
import Topnav from '../component/Topnav/Topnav'
import PageTop from '../component/PageTop/PageTop'
import Cart from '../component/Cart/Cart'
import Footer from '../component/Footer/Footer'


function CartPage(props) {

  
  const User=props.user
  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
        <Topnav title="Cart"/>
        <PageTop pagetitle="Cart List"/>
        <Cart user={User}/>
        <Footer/>
    </Fragment>
  )
}

export default CartPage
