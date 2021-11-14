import React from 'react'
import Marquee from "react-fast-marquee";
import c1 from '../../images/1.webp';
import c2 from '../../images/2.webp';
import c3 from '../../images/3.webp';
import c4 from '../../images/4.webp';
import c5 from '../../images/5.webp';
import c6 from '../../images/6.webp';
import c7 from '../../images/7.webp';
import c8 from '../../images/8.webp';

const index = () => {
    return (
        <div>
            <div>
            <div className="py-5">
            <p className="fs-5 p-0 m-0 fw-bold text-center">
            HELLO THERE </p>
            <h1 ClassName="text-center fw-bold">We Are Glint</h1>
                 <p className="text-center px-5 container fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                </p>
                <div className="container-fluid ">
                        <Marquee style={{ position: "relative", zIndex: "0" }} speed={50} direction={"right"} pauseOnHover={true} gradient={false}>
                            <img className="img-fluid ms-5 ps-2" style={{width: "10em"}} src={c1} alt="Image 1" />
                            <img className="img-fluid ms-5 ps-2" style={{width: "10em"}} src={c2} alt="Image 1" />
                            <img className="img-fluid ms-5 ps-2" style={{width: "10em"}} src={c3} alt="Image 1" />
                            <img className="img-fluid ms-5 ps-2" style={{width: "10em"}} src={c4} alt="Image 1" />
                            <img className="img-fluid ms-5 ps-2" style={{width: "10em"}} src={c5} alt="Image 1" />
                            <img className="img-fluid ms-5 ps-2" style={{width: "10em"}} src={c6} alt="Image 1" />
                            <img className="img-fluid ms-5 ps-2" style={{width: "10em"}} src={c7} alt="Image 1" />
                            <img className="img-fluid ms-5 ps-2" style={{width: "10em"}} src={c8} alt="Image 1" />
                        </Marquee>
                        </div>
            </div>
            </div>
        </div>
    )
}

export default index
