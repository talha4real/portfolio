import React from 'react'
import { Background, P } from './LandingElements';
import Slide from 'react-reveal/Slide';
import './Landing.css';
import Header from './header';
const index = () => {
  return (
    <div>

      {/* <header> */}
      <Header />
      <Background
        className="container-fluid">
        <Slide bottom>


          <div className="  text-center ">
<<<<<<< HEAD
            <P className="typewriter text-white display-4">We are a creative group
              of people who design <br />
              influential brands and
              digital experiences.</P>
            <div class="d-grid mx-auto gap-2 col-6 d-md-flex justify-content-cenetr pt-4">
              <button class="btn col-md-6 col-sm-12 fw-bold py-3 btn-primary me-md-2" type="button">Start Projects</button>
              <button class="Button btn col-md-6 col-sm-12 fw-bold py-3 btn-primary" type="button">About More us</button>
            </div>
=======
                <P className="typewriter text-white display-4">We are a creative group
                    of people who provide <br/>
                    all kinds of solutions for your organization.</P>
                    <div class="d-grid mx-auto gap-2 col-6 d-md-flex justify-content-cenetr pt-4">
                      <button class="btn col-md-6 col-sm-12 fw-bold py-3 btn-primary me-md-2" type="button">Start Projects</button>
                      <button class="Button btn col-md-6 col-sm-12 fw-bold py-3 btn-primary" type="button">About More us</button>
                    </div>
>>>>>>> fbfd376b59691ab34b1ca9722adce1abe4dffb65
          </div>
        </Slide>
      </Background>
      {/* </header> */}
    </div >
  )
}

export default index
