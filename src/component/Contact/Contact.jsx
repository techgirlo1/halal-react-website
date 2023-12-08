import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';
import Loading from '../Loading/Loading';
import Failure from '../Failure/Failure';
function Contact() {



  const [state, setState] = useState({
    address: "",
    mail:"",
    phone:"",
    loading:true,
    error:false
  });

  

 
  useEffect(() => {
    RestClient.GetRequest(APPUrl.Footer).then((result) => {
      if(result ==null){
        setState({error:true})
      }else{
        setState({ address: result[0]['address'],mail: result[0]['email'],phone: result[0]['phone'],loading:false});
      }
      
    }).catch(error=>{
      setState({error:true})
    });
      
  }, []);

  


  const sendContact=()=>{
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let message=document.getElementById('message').value
    // alert(name + email + message )

    if(name=="" || email=="" || message==""){
      alert('All fields are required')
    }else{
    let jsonObject=({name:name,email:email,message:message})
    RestClient.PostRequest(APPUrl.ContactUs,JSON.stringify(jsonObject)).then((result) => {
      alert(result)
    }).catch(error=>{
      alert('error');
    });

  }
  }


  if(state.loading==true){
    return <Loading/>
   }else if(state.error==true){
    return <Failure/>
   }
   else{

  return (
    <Fragment>
          <Container className='mt-5 text-start'>
        <Row>
            <Col lg={6} md={6} sm={12}>
            
                <h1 className='titles'>Contact Us</h1>
                     
                <Form>
      <Form.Group className="mb-3">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text"  required placeholder="Enter Your Name"  id="name" onChange={(e)=>setState({...state,name:e.target.value})} />
        
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Your Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email"  required id='email'onChange={(e)=>setState({...state,email:e.target.value})} />
        
      </Form.Group>


      


      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea"  required rows={3}  id="message"  onChange={(e)=>setState({...state,message:e.target.value})} />
        
      </Form.Group>



      
      <Button variant="info"onClick={sendContact}>
        Submit
      </Button>
      
    </Form>
    
            </Col>

            <Col lg={6} md={6} sm={12}>
              
            <h1 className='titles'>Let's Discuss</h1>
            <p className=''>
                     {state.address}<br/>
                    <FontAwesomeIcon icon={faEnvelope}/> {state.mail}<br/>
                    <FontAwesomeIcon icon={faPhone}/> {state.phone}
                </p>
                
            </Col>
        </Row>
        </Container>
    </Fragment>
  )
}
}
export default Contact
