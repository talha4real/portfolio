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
            <P className="typewriter text-white display-4">We are a creative group
              of people who provide <br />
              all kinds of solutions for your organization.</P>
            <div class="d-grid mx-auto gap-2 col-6 d-md-flex justify-content-cenetr pt-4">
              <button class="btn col-md-6 col-sm-12 fw-bold py-3 btn-primary me-md-2" type="button">Start Projects</button>
              <button class="Button btn col-md-6 col-sm-12 fw-bold py-3 btn-primary" type="button">About More us</button>
            </div>
          </div>
        </Slide>
      </Background>
      {/* </header> */}
    </div >
  )
}

export default index
