import React, { Fragment, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Loading from '../Loading/Loading';
function Productdetails() {

   const [state, setState] = useState({
    
      myData:[],
     loading:true
  
  });
  useEffect(() => {
  
  RestClient.GetRequest(APPUrl.allProduct).then((result) => {
  
    if(result ==null){
      setState({error:true})
    }else{
      setState({ myData: result,loading:false});
    }
    
  }).catch(error=>{
    setState({error:true})
  });
   
  }, []);
  
  if(state.loading==true){
    return <Loading/>
   }else{

  let Data=state.myData.map((Data)=>{
    return  <Col lg={4} md={6} sm={12}>
    <Card style={{ width: '18rem' }} className="projectcard">
     <Card.Img variant="top" src={Data.prod_image}/>
     <Card.Body>
  
    <Card.Title className="title">{Data.prod_desc}</Card.Title>
    <Card.Text  className="desc">
       Price:&#8358;{Data.prod_price}
    </Card.Text>
    <Link to={'/addcart/'+Data.id +"/"+Data.prod_desc}> <Button className='btn site-btn'>Order Now</Button></Link>
  </Card.Body>
  </Card>
    </Col>
  })

   
  return (
    <Fragment>
        <Container className='mt-5'>
            <Row>
            

{Data}
             
            </Row>
        </Container>
    </Fragment>
  )
}
}
export default Productdetails
