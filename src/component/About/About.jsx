import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import aboutimg from'../../asset/images/abt.jpg'
import { init } from 'ityped';
import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';
function About() {

    const [state, setState] = useState({
       image:"",
       desc:""
    });
    
      useEffect(() => {
        const myElement = document.querySelector('#myElement');
        init(myElement, { showCursor: false, strings: ['ISLAMIC FASHION AT ITS PEAK!'] });
    
        RestClient.GetRequest(APPUrl.About).then((result) => {

          setState({image:result[0]['image'],desc:result[0]['desc'] });
        
      })
      }, []);
    




  return (
    <Fragment>
        <Container>


            <h1 className="titleservice">ABOUT US</h1>
          <div className="bottom"></div>
        
          <Row>
            <Col lg={6} md={6} sm={12}>
            <img src={state.image} className='img-fluid abtImg' />
            </Col>
           <Col lg={6} md={6} sm={12}>
            <div className='abtBody'>
                  <h4 className='abtDesc'>Hey There,Welcome To </h4>
                  <h3 className='abtTitle'>{state.desc}</h3>
                  <h4 className='abtDesc'><span id="myElement" style={{ color: 'brown' }}></span></h4>
                  </div> 
            </Col>
            </Row>


        </Container>
    </Fragment>
  )
}

export default About
