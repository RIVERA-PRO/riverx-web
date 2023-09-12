import React, { useRef, useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'; // Agregamos los iconos de comillas
import 'swiper/swiper-bundle.css';
import img1 from '../../img/testimonials/client-1.jpg';
import img2 from '../../img/testimonials/client-2.jpg';
import img3 from '../../img/testimonials/client-3.jpg';
import './Testimonios.css'
export default function Testimonios() {


    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    }, []);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className='TestimoniosConatin'>
            <h1>Testimonios</h1>

            <Swiper
                effect='coverflow'
                grabCursor={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                id='swiper_container2'
            >
                <SwiperSlide id='SwiperSlide2'>
                    <div className={"card-scroll2 scrolled3"}>
                        <div className='bgTextimonial'>
                            <FontAwesomeIcon icon={faQuoteLeft} className='iconTestimonios' />
                            <p>
                                "Lejos, muy lejos, detrás de las montañas de la palabra, lejos de los países Vokalia y Consonantia, viven los textos ciegos.".
                            </p>
                            <FontAwesomeIcon icon={faQuoteLeft} className='iconTestimonios' />
                        </div>
                        <img src={img1} alt='img' />
                        <h4>ClaireBelle Zawadi</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide id='SwiperSlide2'>
                    <div className={"card-scroll2 scrolled3"}>

                        <div className='bgTextimonial'>
                            <FontAwesomeIcon icon={faQuoteLeft} className='iconTestimonios' />
                            <p>
                                "Lejos, muy lejos, detrás de las montañas de la palabra, lejos de los países Vokalia y Consonantia, viven los textos ciegos.".
                            </p>
                            <FontAwesomeIcon icon={faQuoteLeft} className='iconTestimonios' />
                        </div>
                        <img src={img2} alt='img' />

                        <h4>ClaireBelle Zawadi</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide id='SwiperSlide2'>
                    <div className={"card-scroll2 scrolled3"}>

                        <div className='bgTextimonial'>
                            <FontAwesomeIcon icon={faQuoteLeft} className='iconTestimonios' />
                            <p>
                                "Lejos, muy lejos, detrás de las montañas de la palabra, lejos de los países Vokalia y Consonantia, viven los textos ciegos.".
                            </p>
                            <FontAwesomeIcon icon={faQuoteLeft} className='iconTestimonios' />
                        </div>
                        <img src={img3} alt='img' />
                        <h4>ClaireBelle Zawadi</h4>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}
