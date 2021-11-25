import React from 'react';
import landing8 from '../../pages/graphics/inner-land-img-8.webp';
import landing9 from '../../pages/graphics/inner-land-img-9.webp';
import landing10 from '../../pages/graphics/inner-land-img-10.webp';
import dlanding10 from '../../pages/graphics/slidimgd.jpg';
import dlanding8 from '../../pages/graphics/inner-land-img-7.jpg';
import dlanding9 from '../../pages/graphics/inner-land-img-6.jpg';
import one from '../../pages/graphics/1.png';
import two from '../../pages/graphics/2.png';
import three from '../../pages/graphics/5.png';
import CEO from '../../images/ceo.webp'
import { FaqContainer } from './SlideElement';
import {Carousel} from 'react-bootstrap';
import '../../pages/App.css';
const Slider = ({Dark}) => {
    return (
      <div className="m-0 p-0" Dark={Dark} >
  <div class=" active mx-auto text-center">
  <Carousel variant={Dark? "dark": "light"}  className="mx-auto mt-5" style={{width:"70%"}}>

                      <Carousel.Item>
                      <div className="px-5 pb-5">
                    <p className="text-black text-center fs-2 fs-sm-4 px-md-5 px-sm-2">Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori. Excepturi nam cupiditate culpa doloremque deleniti repellat.</p>
                    <div class="py-3 text-black">
                    <img className="rounded-circle" style={{width:"5em"}} src={CEO} alt="" />
                    <p className="p-0 m-0 fw-bold pt-3">Time cok</p>
                    <p className="p-0 m-0">Apple CEO</p>
                    </div>
                      </div>
                      </Carousel.Item>
                      <Carousel.Item>
                      <div className="p-5">
                    <p className="text-black text-center fs-2 fs-sm-4 px-md-5 px-sm-2">Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori. Excepturi nam cupiditate culpa doloremque deleniti repellat.</p>
                    <div class="py-3 text-black">
                    <img className="rounded-circle" style={{width:"5em"}} src={CEO} alt="" />
                    <p className="p-0 m-0 fw-bold pt-3">Time cok</p>
                    <p className="p-0 m-0">Apple CEO</p>
                    </div>
                      </div>
                      </Carousel.Item>
                      <Carousel.Item>
                      <div className="p-5">
                    <p className="text-black text-center fs-2 fs-sm-4 px-md-5 px-sm-2">Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori. Excepturi nam cupiditate culpa doloremque deleniti repellat.</p>
                    <div class="py-3 text-black">
                    <img className="rounded-circle" style={{width:"5em"}} src={CEO} alt="" />
                    <p className="p-0 m-0 fw-bold pt-3">Time cok</p>
                    <p className="p-0 m-0">Apple CEO</p>
                    </div>
                      </div>
                      </Carousel.Item>
                    </Carousel>
  {/* <div className=" w-50 mx-auto  mt-5 border border-2" style={{backgroundColor: "white" , height: "60vh"}}>

  </div> */}
          </div>

      </div>
    )
}

export default Slider