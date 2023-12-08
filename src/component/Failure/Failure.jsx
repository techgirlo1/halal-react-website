import React, { Fragment } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Error from "../../asset/images/error icon.svg";
function Failure() {
  return (
    <Fragment>
        <Container>
            <Row>
                <Col className='text-center'>
                   <img src={Error} className='erroricon'/>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default Failure
