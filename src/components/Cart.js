import React, {useContext} from 'react';
// icons
import {IoArrowForward, IoCartOutline, IoClose} from 'react-icons/io5'
// context
import {CartContext} from "../context/CartContext";
// components
import CartItem from "./CartItem";

// stripe
import {loadStripe} from "@stripe/stripe-js";
import { request } from '../request';


const Cart = () => {
    const {setIsOpen, cart, total, clearCart } = useContext(CartContext)
    const stripePromise = loadStripe('pk_test_51NJMq2AQl5qsNNdp0aJVHzBUtPVKN5hvE01FcUAc5mvU9ORInBhnAtQfxPIdWDbYWqxst13T5gUoDDoweIMOW8XV00i6n6iUqx')

    const handlePayment = async  () => {
        try{
            const stripe = await stripePromise;
            const res = await request.post('/orders', {
                cart,
            });
            console.log(res.data)
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            })
        }catch (error) {
            console.log(error);
        }
    }
    const checkout = async () => {
        // console.log(cart.reduce((total, currentValue)=> total + currentValue.attributes.price, 0))
        const response = {}
        try{
        // const {data} = request.post('http://localhost:1337/orders',response)

        // console.log("order#2",data)
        }catch(e){
            // console.log("eeeeeeeeeeeeeeeeeeeeeeee",e)
        }

    }

    return (
        <div className=' bg-primary w-full h-full px-4 text-white'>
            <div className='overflow-y-auto overflow-x-hidden h-[75vh]'>
                {/*  close icon   */}
                <div
                    onClick={() => setIsOpen(false)}
                    className='text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer'>
                    <IoClose/>
                </div>
                <div className='flex flex-col gap-y-10 px-2'>
                    {cart.map((item) => {
                        return <CartItem item={item} key={item.id}/>
                    })}
                </div>
                {/*    subtotal & total    */}
                {cart.length >= 1 &&
                    <div className='px-6 py-10 flex flex-col'>
                        {/*   subtotal  */}
                        <div className='flex justify-between text-lg'>
                            <div>Subtotal</div>
                            <div>${total}</div>
                        </div>
                        {/*    total    */}
                        <div className='flex justify-between text-2xl'>
                            <div>Total</div>
                            <div>${total}</div>
                        </div>
                    </div>
                }
                {/*    buttons    */}
                <div className='px-6'>
                    {cart.length >= 1
                        ? <div className='flex justify-between gap-x-4'>
                            <button
                                onClick={clearCart}
                                className='btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2 '>clear
                                cart
                            </button>
                            <button
                                onClick={handlePayment}
                                className='btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2 '>
                                Checkout
                                <IoArrowForward className='text-lg'/>
                            </button>
                        </div>
                        : <div className='h-full absolute top-0 right-0 left-0 flex justify-center items-center z-10 flex-col text-white/30 '>
                            <div className='text-2xl '>Your cart is empty</div>
                            <div className='text-6xl'>
                                <IoCartOutline />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;
