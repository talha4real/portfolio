import React from 'react'
import img1 from '../../images/1.svg'
import img2 from '../../images/2.svg'
import img3 from '../../images/3.svg'
import img4 from '../../images/4.svg'
import img5 from '../../images/5.svg'
import img6 from '../../images/6.svg'
import {Div} from './ProcessElements';
import Fade from 'react-reveal/Fade';
import './Project.css';

const index = () => {
    return (
        <div>
        <div>
                <div className="py-5">
            <p className="fs-5 p-0 m-0 fw-bold text-center" style={{color: "#39b54a"}}>
            WHAT WE DO </p>
                 <p className="text-center px-5 container display-5 fw-bold ">We’ve got everything you need to <br/> launch and grow your business </p>
            </div>
            <Fade top>

            <div className="row justify-content-center my-5">
                    <div className="col-md-5">
                    <Div>
                    <div>
                    <img src={img4} alt="" />                    
                    </div>
                        <h3 className="fw-bold fs-2">Brand Identity</h3>
                    </Div>
                        <p className=" fs-5 px-5">Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint</p>
                    </div>

                    <div className="col-md-5">
                    <Div>
                    <div>

                    <img src={img6} alt="" />                    
                    </div>
                    <h3 className="fw-bold fs-2 ">Illustration</h3>
                    </Div>
                        <p className=" fs-5 px-5">Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint</p>
                    </div>

                    <div className="col-md-5">
                    <Div>
                    <div>

                    <img src={img5} alt="" />                    
                    </div>
                 
                        <h3 className="fw-bold fs-2">Marketing</h3>
                    </Div>
                        <p className=" fs-5 px-5">Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint</p>
                    </div>
                    <div className="col-md-5">
                    <Div>
                    <div>

                    <img src={img1} alt="" />                    
                    </div>
                   
                        <h3 className="fw-bold fs-2">Web Design</h3>
                    </Div>
                        <p className=" fs-5 px-5">Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint</p>
                    </div>
                    <div className="col-md-5">
                    <Div>
                    <div>

                    <img src={img2} alt="" />                    
                    </div>
                   
                        <h3 className="fw-bold fs-2">Packaging Design</h3>
                    </Div>
                        <p className=" fs-5 px-5">Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint</p>
                    </div>
                    <div className="col-md-5">
                    <Div>
                    <div>

                    <img src={img3} alt="" />                    
                    </div>
                    
                        <h3 className="fw-bold fs-2">Web Development</h3>
                    </Div>
                        <p className=" fs-5 px-5">Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint</p>
                    </div>
            </div>
            </Fade>
         </div>
        </div>
    )
}

export default index
