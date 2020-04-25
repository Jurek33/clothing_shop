import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import './checkout.style.scss';

const CheckoutPage = ({ cartItems, total }) => {
   if(total>0) {
      return (
         <div className="checkout-page">
            <div className="checkout-header">
               <div className="header-block">
                  <span>Product</span>
               </div>
               <div className="header-block">
                  <span>Description</span>
               </div>
               <div className="header-block">
                  <span>Quantity</span>
               </div>
               <div className="header-block">
                  <span>Price</span>
               </div>
               <div className="header-block">
                  <span>Remove</span>
               </div>
            </div>
            {
               cartItems.map(cartItem => (
                  <CheckoutItem key={cartItem.id} cartItem={cartItem} />
               ))
            }
            <div className="total">
               <span>TOTAL: ${total}</span>
            </div>
            <div className="note-message">
               Note: Please use any valid email address and the following card information to test the payment:
               <br></br>
               Card number: 4242 4242 4242 4242 - Exp: any future date - CVC: any 3 digits
            </div>
            <StripeCheckoutButton price={total} />
         </div>
      );
   } else {
      return (
         <h1>Your cart is empty</h1>
      )
   }
} 

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems, 
   total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);