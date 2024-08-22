import "../Style.css"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import slide1 from "../../picture/slide1.jpg"
import slide2 from "../../picture/slide2.jpg" 
import slide3 from "../../picture/slide3.jpg" 
import slide4 from "../../picture/slide4.jpg" 
import slide5 from "../../picture/slide5.jpg" 
import slide6 from "../../picture/slide6.jpg" 
function Section4() {

    return (
        <div className="container-section4">
            <div className="header-section4">
                <h4>WELCOME TO JOURNEY</h4>
                <h1>Popular Destination
                </h1>
            </div>

            <div class="content-section4">
                <>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >

                        <SwiperSlide><img src={slide1} /></SwiperSlide>
                        <SwiperSlide><img src={slide2} /></SwiperSlide>
                        <SwiperSlide><img src={slide3} /></SwiperSlide>
                        <SwiperSlide><img src={slide4} /></SwiperSlide>
                        <SwiperSlide><img src={slide5} /></SwiperSlide>
                        <SwiperSlide><img src={slide6} /></SwiperSlide>
                    </Swiper>
                </>

            </div>

        </div>
    )
}

export default Section4