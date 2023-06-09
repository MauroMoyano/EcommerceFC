import React, {useState} from 'react';
// images
import Logo from '../img/logo.png';
// icons
import {SlBag} from "react-icons/sl";
import {FiMenu} from "react-icons/fi";
// link
import {Link} from 'react-router-dom';
// components
import SearchForm from "./SearchForm";
import CategoryNavMobile from "./CategoryNavMobile";
import Cart from "./Cart";

const Header = () => {
    return <header>
        <div className='container mx-auto'>
            <div>
            {/*    menu     */}
                <div>
                    <FiMenu/>
                </div>
            {/*  category nav mobile  */}
                <div>
                    <CategoryNavMobile/>
                </div>
            {/*    logo     */}
                <Link to={'/'}>
                    <img src={Logo} alt='' />
                </Link>
            {/*    searchForm - show only on desktop    */}
                <div className='hidden w-full xl:flex xl:max-w-[734px] '>
                    <SearchForm/>
                </div>
                {/*     phone & cart    */}
                <div>
                    {/*     phone      */}
                    <div>Need help? 123 456 789</div>
                    {/*     Cart icon      */}
                    <div className='relative cursor-pointer'>
                        <SlBag className='text-2xl'/>
                    {/*     amount       */}
                        <div>2</div>
                    </div>
                {/*    cart     */}
                    <div className='bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 max-w-[500px] transition-all duration-300'>
                        <Cart />
                    </div>
                </div>
            </div>
            {/* searchForm - show on mobile only */}
            <div className='lg:hidden'>
                <SearchForm />
            </div>
        </div>
    </header>;
};

export default Header;
