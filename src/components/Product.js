import React from 'react';
// link
import {Link} from 'react-router-dom'

const Product = ({product}) => {
console.log(product.attributes.isNew)
    // console.log(product.attributes)
    return (
        <Link>
            <div className='grad w-full h-[362px] rounded-[8px] overflow-hidden relative group'>
                {/*badge*/}
               {/* {product.attributes.isNew?(
                    <div className='absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2
                 rounded-full z-10' >new</div>
                    :(
                        ''
                        )
                )}*/}
                {/*image*/}
                <div className='w-full h-[200px] flex items-center justify-center relative transition-all'>
                    <img
                    className='w-[160px] h-[160px] group-hover:scale-90'
                        src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
                        alt=''/>
                </div>
            </div>
        </Link>
    );
};

export default Product;
