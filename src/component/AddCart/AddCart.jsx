import React, { Fragment, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import cogoToast from 'cogo-toast';
import APPUrl from '../../RestAPI/APPUrl';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Failure from '../Failure/Failure';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';
function AddCart(props) {
  const [state, setState] = useState({
    myProductid: props.id,
    
    image: "",
    desc: "",
    price: "",
    quantity: "",
    email:props.user.email,
    addToCart: "Add To Cart",
    loading:true,
    error:false
  });
  
  useEffect(() => {

  
       axios.get(APPUrl.Productdetails + state.myProductid).then((result) => {
        if(result ==null){
          setState({error:true})

        }else{
      setState({
        ...state,
        image: result.data[0]['prod_image'],
        desc: result.data[0]['prod_desc'],
        price: result.data[0]['prod_price'],loading:false
      
      });
    }
    }).catch(error=>{
      setState({error:true})
    
    });
    }, [state.myProductid]);
 
 
  const addToCart = () => {
    const { quantity, myProductid, image, desc, price,email } = state;
  
    if (!quantity) {
      cogoToast.error('Quantity Field is required', { position: 'top-right' });
      return;
    }else if(!localStorage.getItem('token')){
      cogoToast.warn('Plaese You Have to Login First', { position: 'top-right' });
      window.location.replace('/login');
      return;
    }
  
    


    

      const requestData = {
        quantity: quantity,
        id: myProductid,
        image: image,
        product_name: desc,
        unit_price: price,
        email:email,
        
      };
  
      
  
      axios.post(APPUrl.AddToCart, requestData)
      .then(response => {
        if (response.data === 1) {
          cogoToast.success('Product added successfully', { position: 'top-right' });
      
          

          window.location.replace('/cart');
          
        
        }
      })
      .catch(error => {
        if (error.response) {
          
          console.error('Server error:', error.response.data);
          cogoToast.error('Server error. Please try again later', { position: 'top-right' });
        } else if (error.request) {
          console.error('No response from the server:', error.request);
          cogoToast.error('No response from the server. Please try again later', { position: 'top-right' });
        } else {
          
          console.error('Request setup error:', error.message);
          cogoToast.error('An error occurred. Please try again', { position: 'top-right' });
        }
    
        // Reset the state
        setState({ ...state, addToCart: "Add To Cart" });
        
      });
    

    
  };
  if(state.loading==true){
    return <Loading/>
   }else if(state.error==true){
   return <Failure/>
   }
   else{
  return (
    <Fragment>
      <Container className='mt-5'>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <Card style={{ width: '18rem' }} className="projectcard">
              <Card.Img variant="top" src={state.image} />
              <Card.Body>
                <Card.Title className="title">{state.desc}</Card.Title>
                <Card.Text className="desc">
                  Price: &#8358;{state.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={6} sm={12} className='text-start'>
          

            <div>
              <label>Quantity</label>
              <input
                type="number"
                className='form-control text-start'
                name="quantity"
                onChange={(e) => { setState({ ...state, quantity: e.target.value }); }}
                required
              />
            </div>

            <Button
              onClick={addToCart}
              className='btn btn-block w-100 mt-3 site-btn'
            >
              <FontAwesomeIcon icon={faShoppingCart}  /> {state.addToCart}
            </Button>
          </Col>
        </Row>
      </Container>
      
    </Fragment>
  );
}
} 
export default AddCart;
