// ... (other imports)
import React, { Fragment, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import APPUrl from '../../RestAPI/APPUrl';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Failure from '../Failure/Failure';
function ProcessList(props) {
    const history = useHistory();
  
    const [state, setState] = useState({
      productData: [],
      pageRefreshStatus: false,
      show: false,
      loading: true,
      error: false,
    });
  
    useEffect(() => {
      let email = props.user.email;
      let orderStatus = props.orderStatus; // Use the provided order status
  
      axios
        .get(APPUrl.Orderlist(email, orderStatus))
        .then((response) => {
          if (response == null) {
            setState({ error: true });
          } else {
            setState((prevState) => ({
              ...prevState,
              productData: response.data,
              loading: false,
            }));
          }
        })
        .catch((error) => {
          setState({ error: true });
        });
    }, [props.user.email, props.orderStatus, state.pageRefreshStatus]);
  
    let orderDetails = state.productData.map((data, i) => (
      <div key={i}>
        <Col lg={6} md={6} sm={6} className='mt-3'>
          <h6>Invoice Number: {data.invoice_no}</h6>
          <h6>Product Name: {data.product_name}</h6>
          <h6>Quantity: {data.quantity}</h6>
          <h6>
            Price: {data.unit_price} x {data.quantity}=&#8358;{data.total_price}
          </h6>
          <h6>Status: {data.order_status}</h6>
        </Col>
        <hr />
      </div>
    ));
  
    const handleClose = () => setState({ ...state, show: false });
    const handleShow = () => setState({ ...state, show: true });
  
    const handleOkClick = () => {
      handleClose();
      // Redirect to the home page
      history.push('/');
    };
  
    if (state.loading == true) {
      return <Loading />;
    } else if (state.error == true) {
      return <Failure />;
    } else {
      return (
        <Fragment>
          <Container className='text-start mt-5'>
            <Card>
              <Card.Body>
                <Row>{orderDetails}</Row>
              </Card.Body>
            </Card>
            
          </Container>
        </Fragment>
      );
    }
  }
  
  export default ProcessList;
  