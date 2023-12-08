import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';
import Loading from '../Loading/Loading';
import Failure from '../Failure/Failure';
function Privacy() {

    const [state, setState] = useState({
    
        privacy:"",
      loading:true,
      error:false
  });
  useEffect(() => {
    
    RestClient.GetRequest(APPUrl.Footer).then((result) => {

      if(result ==null){
        setState({error:true})
      }else{
        setState({ privacy: result[0]['privacy'],loading:false});
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

return (
    <Fragment>
        <Container className='text-start'>
            <Row>
                <Col lg={12} md={12} sm={12} className='p-5'>
                  
                  <h1>Privacy Policy</h1>
                  <hr/>
      
                <p>{state.privacy}</p>
                
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}
}
export default Privacy
