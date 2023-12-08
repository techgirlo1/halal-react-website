import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import "../../asset/css/custom.css"

const PageTop=(props)=> {
   {
    return (
      <Fragment>
        <Container fluid className='topFixedPage p-0'>
        <div className='topPageoverlay '>
          <Container fluid className='topContentPage'>
          <div class="row">
          <div class="col-12">
                
                <h4 className='topPageSub'>{props.pagetitle}</h4>
                
           </div>
          </div>
          </Container>
        </div>
        </Container>
      </Fragment>
    )
  }
}

export default PageTop
