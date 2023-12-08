import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';
import Loading from '../Loading/Loading';
import Failure from '../Failure/Failure';
function AboutDesc() {

  const [state, setState] = useState({
    who:"",
    mission:"",
    vision:"",
    loading:true,
    error:false
 });


 useEffect(() => {
  

  RestClient.GetRequest(APPUrl.About).then((result) => {
    if(result ==null){
      setState({error:true})
    }else{
    setState({who:result[0]['who_we_wre'],mission:result[0]['mission'] ,vision:result[0]['vision'],loading:false });
  }
})
}, []);

   if(state.loading==true){
    return <Loading/>
   }else if(state.error==true){
       return <Failure/>
   }else{


  return (
    <Fragment>
        <Container className='text-start mt-5'>
            <Row>
                <Col lg={12} md={12} sm={12}>
                  <h3>Who We Are</h3>
                  <p>{state.who}</p>
                </Col>


                <Col lg={12} md={12} sm={12}>
                  <h3>Our Mission</h3>
                  <p>{state.mission}</p>
                </Col>


                <Col lg={12} md={12} sm={12}>
                  <h3>Our Vision</h3>
                  <p>{state.vision}</p>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}
}
export default AboutDesc
