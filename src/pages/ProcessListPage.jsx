import React, { Fragment, useEffect } from 'react'
import Topnav from '../component/Topnav/Topnav'
import PageTop from '../component/PageTop/PageTop'

import Footer from '../component/Footer/Footer'
import ProcessList from '../component/ProcessList/ProcessList';


function ProcessListPage(props) {
  const User=props.user
  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
        <Topnav title="Processing List"/>
        <PageTop pagetitle="Processing List"/>
        <ProcessList user={User}  orderStatus="Processing"/>
        <Footer/>
    </Fragment>
  )
}

export default ProcessListPage
