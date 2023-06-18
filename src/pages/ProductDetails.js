import React, {useContext} from 'react';
// useParams
import {useParams} from "react-router-dom";
// useFetch
import useFetch from "../hooks/useFetch";
// components
import ProductSlider from '../components/ProductSlider'
import RelatedProducts from "../components/RelatedProducts";

// context
import {CartContext} from "../context/CartContext";
import {Swiper, SwiperSlide} from "swiper/react";
import Product from "../components/Product";
import {Navigation, Pagination} from "swiper";

const ProductDetails = () => {
    const {addToCart} = useContext(CartContext)
    const {id} = useParams();
    // get product data base on the id
    const {data} = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
    // console.log(data[0].attributes)
    if (!data) {
        return <div className='container mx-auto '>LOADING...</div>
    }
    // category title
    const categoryTitle = data[0].attributes.categories.data[0].attributes.title;
    return (
        <div className='mb-16 pt-44 lg:pt-[30px] xl:pt-0'>
            <div className='container mx-auto'>
                {/*   text   */}
                <div className='flex flex-col lg:flex-row gap-[30px] mb-[30px]'>
                    <div
                        className='flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center'>
                        <div className='w-full'>
                            <Swiper modules={[Pagination, Navigation]} loop={false} navigation={true}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                            spaceBetween: 30
                                        },
                                        768: {
                                            slidesPerView: 1,
                                            spaceBetween: 30
                                        },
                                        1024: {
                                            slidesPerView: 1,
                                            spaceBetween: 30
                                        },
                                        1440: {
                                            slidesPerView: 1,
                                            spaceBetween: 30
                                        }
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    className='productSlider rounded-lg mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]'
                            >

                                <>
                                    {

                                        data[0].attributes.photos.data?.map((img, index) => {
                                            return <SwiperSlide key={index}>
                                                <img src={`http://localhost:1337${img.attributes.url}`} alt=""/>
                                            </SwiperSlide>
                                        })
                                    }
                                </>
                            </Swiper>

                                </div>
                                </div>
                                <div className='flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center '>
                            {/* category title*/}
                                <div className='uppercase text-accent text-lg font-medium mb-2'>
                            {data[0].attributes.categories.data[0].attributes.title} Cameras
                                </div>
                            {/*  title  */}
                                <h2 className='h2 mb-4'>{data[0].attributes.title}</h2>
                            {/*    description  */}
                                <p className='mb-12'>{data[0].attributes.description}</p>
                            {/*    price & btn  */}
                                <div className='flex items-center gap-x-8'>
                            {/*    price    */}
                                <div className='text-3xl text-accent font-semibold'>
                                ${data[0].attributes.price}
                                </div>
                                <button onClick={()=> addToCart(data, data[0].id)} className='btn btn-accent'>Add to cart</button>
                                </div>
                                </div>
                                </div>
                            {/*    related products     */}
                                <RelatedProducts categoryTitle={categoryTitle} />
                                </div>
                                </div>
                                );
                            };

                            export default ProductDetails;
