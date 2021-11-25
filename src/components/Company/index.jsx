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
        <div style={{ paddingTop: "150px" }} id='client'>
            <div >
                <div className="pt-5">
                    <p className="fs-5 p-0 m-0 fw-bold text-center" style={{ color: "#39b54a" }}>
                        Our Clients </p>
                    <p className="text-center fw-bold display-5">Glint has been honored to partner <br /> up with these client</p>
                    <div style={{ width: "100vh" }} className="container-fluid py-3">
                        <Marquee style={{ position: "relative", zIndex: "0" }} speed={50} direction={"right"} pauseOnHover={true} gradient={false}>
                            <img className="img-fluid ms-5 ps-2" style={{ width: "10em" }} src={c1} alt="Image 1" />
                            <img className="img-fluid ms-5 ps-2" style={{ width: "10em" }} src={c2} alt="Image 1" />
                            <img className="img-fluid ms-5 ps-2" style={{ width: "10em" }} src={c3} alt="Image 1" />
                            <img className="img-fluid ms-5 ps-2" style={{ width: "10em" }} src={c4} alt="Image 1" />
                            <img className="img-fluid ms-5 ps-2" style={{ width: "10em" }} src={c5} alt="Image 1" />
                            <img className="img-fluid ms-5 ps-2" style={{ width: "10em" }} src={c6} alt="Image 1" />
                            <img className="img-fluid ms-5 ps-2" style={{ width: "10em" }} src={c7} alt="Image 1" />
                            <img className="img-fluid ms-5 ps-2" style={{ width: "10em" }} src={c8} alt="Image 1" />
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
