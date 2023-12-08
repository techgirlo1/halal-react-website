import React, { Fragment, useEffect, useState } from 'react';
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import APPUrl from '../../RestAPI/APPUrl';
import cogoToast from 'cogo-toast';
import Loading from '../Loading/Loading';
import Failure from '../Failure/Failure';

function Cart(props) {
  const [cart, setCart] = useState({
    productData: [],
    pageRefreshStatus: false,
    name: "",
    Address: "",
    phone: "",
    state: "",
    loading:true,
    error:false
  });

  // const history = useHistory();

  const removeItem = (id) => {
    axios.get(APPUrl.removeCartlist(id))
      .then(response => {
        if (response.data === 1) {
          cogoToast.success('Cart Item Removed', { position: 'top-right' });
          setCart(prevCart => ({
            ...prevCart,
            pageRefreshStatus: !prevCart.pageRefreshStatus,
          }));
        } else {
          cogoToast.error('Server error. Please try again later', { position: 'top-right' });
        }
      })
      .catch(error => {
        cogoToast.error('Server error. Please try again later', { position: 'top-right' });
      });
  };

  const itemPlus = (id) => {
    axios.get(APPUrl.cartItemPlus(id))
      .then(response => {
        if (response.data.success) {
          cogoToast.success('Item Quantity Increased', { position: 'top-right' });
          setCart(prevCart => ({
            ...prevCart,
            pageRefreshStatus: !prevCart.pageRefreshStatus,
          }));
        } else {
          cogoToast.error('Server error. Please try again later', { position: 'top-right' });
        }
      })
      .catch(error => {
        cogoToast.error('Server error. Please try again later', { position: 'top-right' });
      });
  };

  const itemMinus = (id) => {
    axios.get(APPUrl.cartItemMinus(id))
      .then(response => {
        if (response.data.success) {
          cogoToast.success('Item Quantity Decreased', { position: 'top-right' });
          setCart(prevCart => ({
            ...prevCart,
            pageRefreshStatus: !prevCart.pageRefreshStatus,
          }));
        } else {
          cogoToast.error('Server error. Please try again later', { position: 'top-right' });
        }
      })
      .catch(error => {
        cogoToast.error('Server error. Please try again later', { position: 'top-right' });
      });
  };

  useEffect(() => {
    axios.get(APPUrl.Cartlist(props.user.email))
      .then(response => {
         if(response ==null){
          setCart({error:true})

        }else{
        setCart(prevCart => ({
          ...prevCart,
          productData: response.data,loading:false
        }));
      }
      })
      .catch(error => {
       setCart({error:true})
      });
  }, [props.user.email, cart.pageRefreshStatus]);
  if(cart.loading==true){
    return <Loading/>
   }else if(cart.error==true){
    return <Failure/>
    }
   else{

  let totalPriceSum = 0;
  const cartItems = cart.productData && cart.productData.length > 0 ? (
    cart.productData.map((data, i) => (
      totalPriceSum = totalPriceSum + parseInt(data.total_price),
      <div key={i}>
        <Row>
          <Col lg={5} md={5} sm={12} className='text-start'>
            <Card style={{ width: '18rem' }} className="projectcard">
              <Card.Img variant="top" src={data.image} />
              <Card.Body>
                <Card.Title className="title"></Card.Title>
                <Card.Text className="desc"></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={4} sm={12} className='text-start'>
            <h6>{data.product_name}</h6>
            <h6>Quantity= {data.quantity}</h6>
            <h6> Price= {data.unit_price} x {data.quantity}=&#8358;{data.total_price}</h6>
          </Col>
          <Col lg={3} md={3} sm={12}>
            <Button className='btn mx-1 mt-3 btn-sm site-btn' onClick={() => removeItem(data.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Button className='btn mx-1 mt-3 btn-sm site-btn' onClick={() => itemPlus(data.id)}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
            <Button className='btn mx-1 mt-3 btn-sm site-btn' onClick={() => itemMinus(data.id)}>
              <FontAwesomeIcon icon={faMinus} />
            </Button>
          </Col>
        </Row>
      </div>
    ))
  ) : (
    <p>No items in the cart.</p>
  );

  const ConfirmOrder = () => {
    const { state, name, Address, phone } = cart;

    if (!name || !Address || !phone || !state) {
      cogoToast.error('All Fields Are required', { position: 'top-right' });
      return;
    }

    let invoice = new Date().getTime();
    let email = props.user.email;

    const requestData = {
      state: state,
      name: name,
      delivery_address: Address,
      phone: phone,
      email: email,
      invoice_no: invoice,
      delivery_charge: "00",
    };

    axios.post(APPUrl.CartOrder, requestData)
      .then(response => {
        if (response.data === 1) {
          cogoToast.success('Order Request Received ', { position: 'top-right' });
          // Redirect using history.push
          window.location.replace('/orderlist');
          
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
      });
  };

  return (
    <Fragment>
      <Container className='mt-3'>
        <Row>
          <Col lg={8} md={8} sm={12}>
            {cartItems}
          </Col>

          <Col lg={4} md={4} sm={12} className='mt-3 text-start'>
            <Card>
              <CardBody>
                <Container fluid>
                  <Row>
                    <Col lg={12} md={12} SM={12}>
                      <h5 class="text-danger">Total Due: &#8358; {totalPriceSum}</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} md={12} SM={12} className='mt-3'>
                      <label className='mb-2'>Select Country</label>
                      <select class="form-control" name='state' value={cart.state} onChange={(e) => { setCart({ ...cart, state: e.target.value }) }} required>
                        <option>Select</option>
                        <option value="Nigeria">Nigeria</option>
                      </select>
                    </Col>

                    <Col lg={12} md={12} SM={12} className='mt-3'>
                      <label className='mb-2'>Your Name</label>
                      <input type="text" class="form-control " placeholder='' name='name' onChange={(e) => { setCart({ ...cart, name: e.target.value }) }} required />
                    </Col>

                    <Col lg={12} md={12} SM={12} className='mt-3'>
                      <label className='mb-2'> Phone Number</label>
                      <input type="text" class="form-control " name="phone" onChange={(e) => { setCart({ ...cart, phone: e.target.value }) }} required />
                    </Col>

                    <Col lg={12} md={12} SM={12} className='mt-3'>
                      <label className='mb-2'>Delivery Address</label>
                      <textarea class="form-control " placeholder='' name="Address" onChange={(e) => { setCart({ ...cart, Address: e.target.value }) }} required />
                    </Col>

                    <Col lg={12} md={12} SM={12} className='mt-3'>
                      <Button onClick={ConfirmOrder} className='btn btn-block w-100 mt-3 site-btn'>Confirm Order</Button>
                    </Col>
                  </Row>
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
}
export default Cart;
