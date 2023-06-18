import React from 'react';
// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'
// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css'
// import required modules
import {Pagination} from "swiper";
// img
import SubZero from '../img/Sub Zero.jpeg'
import Goku from '../img/Goku.jpg'
import Gengar from '../img/Gengar.jpeg'

// data
const sliderData = [
    {
        img: SubZero,
        preTitle: 'Los mas vendidos',
        titlePart1: 'Descuento de 20%',
        titlePart2: 'en tu',
        titlePart3: 'primer compra',
        btnText: '¡Comprame!'
    },
    {
        img: Goku,
        preTitle: 'Los mas vendidos',
        titlePart1: 'con tu compra',
        titlePart2: 'tenes descuento',
        titlePart3: 'en un busto!',
        btnText: 'Shop now'
    },
    {
        img: Gengar,
        preTitle: 'Los mas vendidos',
        titlePart1: 'Tiempo limitado',
        titlePart2: '20% off',
        titlePart3: 'atrapalos ya!',
        btnText: 'Shop now'
    }
]

const MainSlider = () => {
    return (
        <Swiper modules={[Pagination]}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                className='mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl'
        >

            <>
                {
                    sliderData.map((slide, index) => {
                        return <SwiperSlide key={index}>
                            <div className='flex flex-col xl:bg-primary lg:flex-row h-full p-[20px] md:p-[60px]'>
                                {/*    text     */}
                                <div className='w-full lg:flex-1 md:h-[20rem]'>
                                    <div className='uppercase mb-1 text-center lg:text-left'>
                                        {slide.preTitle}
                                    </div>
                                    <div className='text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20'>
                                        {slide.titlePart1}<br/>
                                        {slide.titlePart2}<br/>
                                        {slide.titlePart3}
                                    </div>
                                    <button className='btn btn-accent mx-auto  lg:mx-0'>
                                        Shop now
                                    </button>
                                </div>
                                {/*    img     */}
                                <div className='flex-1'>
                                    <img className='xl:absolute rounded-xl xl:-right-[0rem] xl:-bottom-[0rem] h-full'
                                         src={slide.img}
                                         alt=""
                                    />
                                </div>
                            </div>
                        </SwiperSlide>;
                    })
                }
            </>
        </Swiper>
    );
};

export default MainSlider;
