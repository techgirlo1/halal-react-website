import React, { Fragment, useEffect } from 'react'
import Topnav from '../component/Topnav/Topnav'
import Login from '../component/User/Login'
import Footer from '../component/Footer/Footer'



function LoginPage(props) {

  const setUser=props.setUser
  const user=props.user

  useEffect(() => {
    window.scroll(0,0);

    
  }, []);
  return (
    <Fragment>
        <Topnav title="Login"/>

        <Login setUser={setUser} user={user}/>
        <Footer/>
    </Fragment>
  )
}

export default LoginPage
