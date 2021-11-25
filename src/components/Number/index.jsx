import React from 'react'
import {Number,H1} from './NumberElements'
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
const index = () => {
    return (
        <Number className="container-fluid-fluid py-5">
           
            <div ClassName=" my-5 py-5  ">
            <Slide top cascade>
            <div className="py-5">
            <p className="fs-5 p-0 m-0 fw-bold text-center">
            HELLO THERE </p>
            <H1 className="text-center">We Are Glint</H1>
                 <p className="text-center px-5 container fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                </p>
            </div>
            </Slide>

            <Bounce bottom  cascade>
                <div className="container row pt-3 pb-5 justify-content-center mx-auto ">
                        <div className="col-lg-3 text-center border  border-start-0 border-top-0 border-bottom-0  border-end-1   ">
                            <h1 className="text-white fw-bold display-1">127</h1>
                            <p className="fs-5 fw-bold">
                            Awards Received
                            </p>
                        </div>
                        <div className="col-lg-3 text-center border  border-start-0 border-top-0 border-bottom-0  border-end-1 ">
                            <h1 className="text-white fw-bold display-1">1505</h1>
                            <p className="fs-5 fw-bold">
                            Cups of Coffee
                            </p>
                        </div>
                        <div className="col-lg-3 text-center  border  border-start-0 border-top-0 border-bottom-0  border-end-1 ">
                            <h1 className="text-white fw-bold display-1">109</h1>
                            <p className="fs-5 fw-bold">
                            Projects Completed
                            </p>
                        </div>
                        <div className="col-lg-3 text-center border  border-start-0 border-top-0 border-bottom-0  border-end-1 ">
                            <h1 className="text-white fw-bold display-1">102</h1>
                            <p className="fs-5 fw-bold">
                            Happy Clients
                            </p>
                        </div>
                </div>
               </Bounce>
            </div>
        </Number>
    )
}

export default index
