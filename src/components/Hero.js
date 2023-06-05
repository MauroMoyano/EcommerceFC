import React from 'react';
// import components
import CategoryNav from "./CategoryNav";
import MainSlider from "./MainSlider";
// images
import PromoImg1 from '../img/promo_img1.png'
import PromoImg2 from '../img/promo_img2.png'

const Hero = () => {
    return <section className='mb-[30px] pt-36 lg:pt-0'>
        <div className='container mx-auto'>
            <div className='flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px] lg:max-w-[734px] mx-auto'>
                {/*  sidebar  */}
                <div>
                    <CategoryNav/>
                </div>
                {/*  main sidebar  */}
                <div className='w-full max-w-lg bg-pink-50'>
                    <MainSlider />
                </div>
                {/*  promo images   */}
                <div>
                    {/*    promo 1   */}
                    <div>promo 1</div>
                    {/*    promo 2   */}
                    <div>promo 2</div>
                </div>
            </div>
        </div>
    </section>;
};

export default Hero;
