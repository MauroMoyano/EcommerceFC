import React, {createContext, useEffect, useState} from 'react';
import cartItem from "../components/CartItem";

// create context
export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [cart, setCart] = useState([])
    const [itemsAmount, setItemsAmount] = useState(0)
    const [amount, setAmount] = useState(0)
    const [total, setTotal] = useState(0)

    // cart amount
    useEffect(() => {
        const amount = cart.reduce((a, c) => {
            return a + c.amount;
        }, 0);
        setItemsAmount(amount)
    }, [cart])

    // cart total
    useEffect(()=>{
        const total = cart.reduce((a, c)=>{
            return a + c.attributes.price * c.amount
        }, 0 )
        setTotal(total)
    }, [cart])

    // add to cart
    const addToCart = (item, id) => {
        const newItem = {...item[0], amount: 1}
        setCart([...cart, newItem])
        // set if item is already in the cart
        const cartItem = cart.find(item => {
            return item.id === id;
        })
        if (cartItem) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    setAmount(cartItem.amount + 1)
                    return {...item, amount: cartItem.amount + 1}
                } else {
                    return item;
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, newItem]);
        }
        // open the cart sidebar
        setIsOpen(true)
    }
    // remove from cart
    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        })
        setCart(newCart)
    }

    // handle input
    const handleInput = (event, id) => {
        const value = parseInt(event.target.value)
        const cartItem = cart.find((item)=>{
            return item.id === id
        })
     if(cartItem){
         const newCart = cart.map(item => {
             if(item.id === id) {
                 if(isNaN(value)) {
                     setAmount(1)
                     return {...item, amount: 1}
                 }else{
                     setAmount(value)
                     return {...item, amount: value}
                 }
             }else{
                 return item
             }
         })
         setCart(newCart)
     }
     setIsOpen(true)
    }

    // handle select
    const handleSelect = (event, id) => {
        const value = parseInt(event.target.value);
        const cartItem = cart.find((item)=>{
            return item.id === id;
        });
        if(cartItem){
            const newCart = [...cart].map(item => {
                if(item.id === id){
                    setAmount(value);
                    return {...item, amount:value}
                }else{
                    return item;
                }
            })
            setCart(newCart)
        }
    }

    const clearCart = () => {
        setCart([]);
    }


    return (<CartContext.Provider
        value={{
            isOpen,
            setIsOpen,
            addToCart,
            cart,
            removeFromCart,
            itemsAmount,
            handleInput,
            handleSelect,
            total,
            clearCart
        }}>
        {children}
    </CartContext.Provider>);
};

export default CartProvider;
