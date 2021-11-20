import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import Footer from '../components/Footer'

import { Splide, SplideSlide } from '@splidejs/react-splide';

import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import Fade from 'react-reveal/Fade';
import Jello from 'react-reveal/Jello';
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';
import Jump from 'react-reveal/Jump';




import "./App.css";

//here bad stuff
import Landing from '../components/Landing'
import Number from '../components/Number'
import Slider from '../components/Slider'
import ProcessProject from '../components/ProcessProject'
import Company from '../components/Company'
import ContactUs from '../components/ContactUs';
const Home = () => {
    const [Dark, setDark] = useState("false");
    const [isOpen,setIsOpen] = useState(false);
    let primaryOptions = {
        type      : 'loop',
  
    	autoplay  : true,
        perPage   : 4,
        perMove   : 1,
        gap       : '2rem',
        pagination: true,
    };
  
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const toggleDark = () =>{
        setDark(!Dark);
        console.log(Dark);
    }
    const Backg = styled.div`
  
    background: ${({Dark}) => (Dark ? 'white' : 'black')};
  
`
    

    
    return (
        <>  
       
         <Sidebar  Dark={Dark} isOpen={isOpen} toggle={toggle} />
         {/*  */}
            {/* <Navbar Dark={Dark} toggleDark={toggleDark} toggle={toggle}/> */}
      <Backg Dark={Dark}
      className ="container-fluid-fluid">
      
      {/* landing page */}
      <Landing Dark={Dark} />

        <Number/>

        <ProcessProject />
        <div style={{ backgroundColor: "#e6e6e6"}}>

         <Company/>
     <Slider  Dark={Dark}/>
        </div>


      {/*  BREATHE LIFE  */}
     {/* Company */}
      {/* slider */}
     
  {/* DIVERSE & TRULY UNIQUE PORTFOLIOS  */}
      {/* <Portfolio  Dark={Dark}/> */}
      {/* YOUR ONLINE ART STORE */}
      {/* <Store  Dark={Dark}/> */}
{/* last */}
      {/* <Last  Dark={Dark}/> */}
      <ContactUs/>
    </Backg>
     
            <Footer/>
    
         
        </>
    )
}

export default Home
