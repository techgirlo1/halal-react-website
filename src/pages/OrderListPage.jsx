import React, { Fragment, useEffect } from 'react'
import Topnav from '../component/Topnav/Topnav'
import PageTop from '../component/PageTop/PageTop'

import Footer from '../component/Footer/Footer'
import OrderList from '../component/OrderList/OrderList';


function OrderListPage(props) {
  const User=props.user
  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
        <Topnav title="Order List"/>
        <PageTop pagetitle="Order List"/>
        <OrderList user={User}  orderStatus="pending"/>
        <Footer/>
    </Fragment>
  )
}

export default OrderListPage
