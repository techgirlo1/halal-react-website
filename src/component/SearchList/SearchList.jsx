import React, { Fragment } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

function SearchList({ search, ProductData }) {
  const renderProductCards = () => {
    return ProductData.map((data) => (
      <Col key={data.id} lg={4} md={6} sm={12}>
        <Card style={{ width: '18rem' }} className="projectcard">
          <Card.Img variant="top" src={data.prod_image} />
          <Card.Body>
            <Card.Title className="title">{data.prod_desc}</Card.Title>
            <Card.Text className="desc">
              Price: &#8358;{data.prod_price}
            </Card.Text>
            <Link to={`/addcart/${data.id}/${data.prod_desc}`}>
              <Button className="btn site-btn">Order Now</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <Fragment>
      <Container>
        <h1 className="titleservice">OUR PRODUCTS</h1>
        <div className="bottom"></div>
        <Row>
          {ProductData.length > 0 ? renderProductCards() : <p>No products found</p>}
          
        </Row>
      </Container>
    </Fragment>
  );
}

export default SearchList;
