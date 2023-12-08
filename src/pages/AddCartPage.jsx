import React, { Fragment, useEffect, useState } from 'react'
import Topnav from '../component/Topnav/Topnav'
import PageTop from '../component/PageTop/PageTop'

import Footer from '../component/Footer/Footer'
import AddCart from '../component/AddCart/AddCart';
import { useParams } from 'react-router-dom'; 

function AddCartPage(props) {


    const { productID,productname } = useParams(); // Use useParams to get the projectID from the URL

  const [state, setState] = useState({

    // passing the projectiD and projectName from Approuter
    productPassedID: productID,
    coursePassedName:productname,
  });

  const User=props.user

  useEffect(() => {
    window.scroll(0,0);

    
  }, []);

  
  return (
    <Fragment>
        <Topnav title="AddCart"/>
        <PageTop pagetitle={state.coursePassedName}/>
        <AddCart id={state.productPassedID}  user={User}/>
        <Footer/>
    </Fragment>
  )
}

export default AddCartPage
