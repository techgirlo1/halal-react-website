import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom/cjs/react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function Profile(props) {



  let name = "";
  let email = "";
  
  if (props.user) {
    name = props.user.name;
    email = props.user.email;
  }
 
  

  if(!localStorage.getItem('token')){
  return <Redirect to={'/login'}/>
  }
  return (
    <Fragment>
        <Container  className='my-5 text-start'>
        <Row>
          <Col  lg={4} md={4} sm={12}>
          <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
      <ListGroup.Item><Link to='/cart' style={{textDecoration:'none',color:'black'}}>Cart List</Link></ListGroup.Item>
        <ListGroup.Item><Link to='/orderlist' style={{textDecoration:'none',color:'black'}}>Pending Order List</Link></ListGroup.Item>
        <ListGroup.Item><Link to='/processlist' style={{textDecoration:'none',color:'black'}}>Processing Order List</Link></ListGroup.Item>
        <ListGroup.Item><Link to='/processlist' style={{textDecoration:'none',color:'black'}}>Delivered Order List</Link></ListGroup.Item>
        
      </ListGroup>
    </Card>
          </Col>
            <Col lg={8} md={8} sm={12} className='text-start' >
               <h1>User Profile Page</h1>
               <ul className='list-group'>
                 <li className='list-group-item'>Name: {name}</li>
                 <li className='list-group-item'>Email: {email}</li>
               </ul>
            </Col>
        </Row>
        </Container> 
    </Fragment>
  )
}

export default Profile
