import React, { Fragment, useEffect } from 'react'
import Topnav from '../component/Topnav/Topnav'
import PageTop from '../component/PageTop/PageTop'
import Footer from '../component/Footer/Footer'
import Profile from '../component/Profile/Profile'


function ProfilePage(props) {
const User=props.user
  

  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
        <Topnav title="Profile"/>
        <PageTop pagetitle="Profile"/>
        <Profile user={User}/>
        <Footer/>
    </Fragment>
  )
}

export default ProfilePage
