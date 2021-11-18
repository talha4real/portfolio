import React from 'react'
import {Background} from './LandingElements';
import hero from '../../images/hero-bg.jpg';
const index = () => {
    return (
        <div>
             <header>
        
        <Background
          className="container-fluid" style={{background: `url(${hero})`}}>
          <div className="py-5 mb-5 text-center ">
                <h1>We are a creative group
                    of people who design <br/>
                    influential brands and
                    digital experiences.</h1>
          </div>
        </Background>
      </header>
        </div>
    )
}

export default index
