import React, { Fragment, useEffect } from 'react'
import Topnav from '../component/Topnav/Topnav'
import PageTop from '../component/PageTop/PageTop'
import Footer from '../component/Footer/Footer'
import DeliveredList from '../component/DeliveredList/DeliveredList';


function DeliveredListPage(props) {
  const User=props.user
  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
        <Topnav title="Delivered List"/>
        <PageTop pagetitle="Delivered List"/>
        <DeliveredList user={User}  orderStatus="complete"/>
        <Footer/>
    </Fragment>
  )
}

export default  DeliveredListPage;
