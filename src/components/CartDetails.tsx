import React from 'react';
import './CartDetails.css';

const CartDetails = () => {
    return(
        <div className="cartDetails">
            <p className='cart-header'>YOUR CART DETAILS</p>
            <div className='cart-body'> 
                <p className="cart-empty">Your cart is empty right now. Please add courses in the cart from the list</p>
            </div>
            <div className='cart-value'>
                <p className='cart-text'>Total Cart Value</p>
                <div className='cart-total'>
                    <span>Rs 563/-</span>
                    <img src="/images/checkout.png" alt="checkout"></img>
                </div>
            </div>
        </div>
    );

}

export default CartDetails;