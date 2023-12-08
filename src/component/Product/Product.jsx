import React, { Fragment, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom';
import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';
import Loading from '../Loading/Loading';
import Failure from '../Failure/Failure';
function Product() {




  const [state, setState] = useState({
    
    myData:[],
    loading:true,
    
});
useEffect(() => {

RestClient.GetRequest(APPUrl.Producthome).then((result) => {

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
 }else if(state.error==true){
  return <Failure/>
}
 else{

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
        <Container>
            
        <h1 className="titleservice">OUR PRODUCTS</h1>
          <div className="bottom"></div>
            <Row>
                


                {Data}
                <NavLink to="/product" className='more'>View More<FontAwesomeIcon icon={faArrowCircleRight}/></NavLink>
            </Row>
        </Container>
    </Fragment>
  )
}
}
export default Product
