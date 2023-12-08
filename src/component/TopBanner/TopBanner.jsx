import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Carousel from 'react-bootstrap/Carousel';

function TopBanner() {


  const [state, setState] = useState({
   
   

  });
  useEffect(() => {
    
     
  }, []);



  


 
  

return (
    <Fragment>
        <Carousel>
      
        <Carousel.Item>
        <div className='topFixedBanner'>
        <div className='topBanneroverlay'>

    <Carousel.Caption style={{paddingBottom:"180px"}}>
    <h1 className='Toptiltle'>HOME OF ISLAMIC FASHION</h1>
    <p className='topsub'>Get Your Beautiful Hijabs Available WorldWide</p>
    </Carousel.Caption>
        </div>
        </div>
      </Carousel.Item>



      <Carousel.Item>
        <div className='topFixedBanner2'>
        <div className='topBanneroverlay'>
        
        <Carousel.Caption style={{paddingBottom:"180px"}}>
    <h1 className='Toptiltle'>HOME OF ISLAMIC FASHION</h1>
    <p className='topsub'>Get Your Nice Hijab Pins At a Very affordable Prices</p> 
    </Carousel.Caption>

    
        </div>
        </div>
      </Carousel.Item>


      <Carousel.Item>
        <div className='topFixedBanner3'>
        <div className='topBanneroverlay'>

        <Carousel.Caption style={{paddingBottom:"180px"}}>
    <h1 className='Toptiltle'>HOME OF ISLAMIC FASHION</h1>
    <p className='topsub'>Get Nice And Lastable Socks At affordable Prices</p>
    </Carousel.Caption>
        </div>
        </div>
      </Carousel.Item>
     
      
    </Carousel>

    </Fragment>
  )
}

export default TopBanner
