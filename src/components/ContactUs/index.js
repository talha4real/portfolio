import React from 'react'
import { ContactContainer } from './ContactUsElements';
import './ContactUsElements.css';
import Slide from 'react-reveal/Slide';

const index = () => {
    return (
        <>
            <ContactContainer className="py-5">
                <p className="text-center fw-bold" style={{ color: "#39b54a" }}>CONTACT US</p>
                <p className="text-center fw-bold text-white display-6 ">
                    Reach out for a new project or just say hello
                </p>
                <Slide bottom>
                <div className=" row justify-content-center py-5 ">
                    <div className="col-md-5 p-5" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
                        <p className="text-white">SEND US A MESSAGE</p>
                        <form class="row g-3">

                            <div class="col-12">
                                <input type="text" class="form-control mt-3 py-3" id="inputAddress" placeholder="Your name" />
                            </div>
                            <div class="col-12">
                                <input type="email" class="form-control mt-3 py-3" id="inputAddress2" placeholder="Email" />
                            </div>
                            <div class="col-12">
                                <input type="text" class="form-control mt-3 py-3" id="inputAddress2" placeholder="Subject" />
                            </div>
                            <div class="col-12">
                                <textarea style={{height: "10rem"}} class="form-control mt-3 " id="exampleFormControlTextarea1" placeholder="Your Message" rows="3"></textarea>
                            </div>

                            <div class="col-12">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary p-3 text-uppercase fw-bold" style={{ backgroundColor: "#39b54a", color: "#fffff" }} type="button">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3 p-5 " style={{ backgroundColor: "black" }}>
                        <p className="text-white">CONTACT INFO</p>
                        <div className="pt-3">
                            <p className="fw-bold" style={{ color: "#39b54a" }}>Where to Find Us</p>
                            <p className=" contactpara">1600 Amphitheatre Parkway <br />
                                Mountain View, CA <br />
                                94043 US</p>
                        </div>
                        <div className="pt-3">
                            <p className="fw-bold" style={{ color: "#39b54a" }}>Email Us At</p>
                            <p className=" contactpara">contact@glintsite.com</p>
                            <p className=" contactpara">info@glintsite.com</p>
                        </div>
                        <div className="pt-3">
                            <p className="fw-bold" style={{ color: "#39b54a" }}>Call Us At</p>
                            <p className=" contactpara">Phone: (+63) 555 1212</p>
                            <p className=" contactpara">Mobile: (+63) 555 0100</p>
                            <p className=" contactpara">Fax: (+63) 555 010</p>
                        </div>
                        <div className="py-3">
                            <div class="d-flex ">
                                <svg class="" style={{ width: "1.5rem " }} aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg>
                                <svg class="" style={{ width: "1.5rem", marginLeft: "1em" }} aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" class="svg-inline--fa fa-facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"></path></svg>
                                <svg class="" style={{ width: "1.5rem",margin: "0 1em" }} aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" class="svg-inline--fa fa-discord" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M524.5 69.84a1.5 1.5 0 0 0 -.764-.7A485.1 485.1 0 0 0 404.1 32.03a1.816 1.816 0 0 0 -1.923 .91 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.14-30.6 1.89 1.89 0 0 0 -1.924-.91A483.7 483.7 0 0 0 116.1 69.14a1.712 1.712 0 0 0 -.788 .676C39.07 183.7 18.19 294.7 28.43 404.4a2.016 2.016 0 0 0 .765 1.375A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.1 430.4a1.86 1.86 0 0 0 -1.019-2.588 321.2 321.2 0 0 1 -45.87-21.85 1.885 1.885 0 0 1 -.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.23 43.92 200.4 43.92 295.5 0a1.812 1.812 0 0 1 1.924 .233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1 -.162 3.126 301.4 301.4 0 0 1 -45.89 21.83 1.875 1.875 0 0 0 -1 2.611 391.1 391.1 0 0 0 30.01 48.81 1.864 1.864 0 0 0 2.063 .7A486 486 0 0 0 610.7 405.7a1.882 1.882 0 0 0 .765-1.352C623.7 277.6 590.9 167.5 524.5 69.84zM222.5 337.6c-28.97 0-52.84-26.59-52.84-59.24S193.1 219.1 222.5 219.1c29.67 0 53.31 26.82 52.84 59.24C275.3 310.1 251.9 337.6 222.5 337.6zm195.4 0c-28.97 0-52.84-26.59-52.84-59.24S388.4 219.1 417.9 219.1c29.67 0 53.31 26.82 52.84 59.24C470.7 310.1 447.5 337.6 417.9 337.6z"></path></svg>
                                <svg class="" style={{ width: "1.5rem" }} aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>

                            </div>
                        </div>

                    </div>
                </div>
                </Slide>
            </ContactContainer>
        </>
    )
}

export default index
