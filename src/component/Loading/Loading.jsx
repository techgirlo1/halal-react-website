import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Loader from '../../asset/images/loader.svg';
function Loading() {
  return (
   <Fragment>
      <Container className='text-center'>
          <Row>
            <Col>
              <img src={Loader}/>
            </Col>
          </Row>
      </Container>
   </Fragment>
  )
}

export default Loading
