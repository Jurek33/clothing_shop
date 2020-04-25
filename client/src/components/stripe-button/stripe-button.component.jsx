import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => { 
   const stripePrice = price * 100;
   const publishableKey = 'pk_test_DLcFSwMlT3HQDqzq6bM8v2qE00VKE3ctQe';
   const onToken = token => {
      axios({
         url: 'payment',
         method: 'post',
         data: {
            amount: stripePrice,
            token
         }
      }).then(response => {
         alert('Payment Successful');
      }).catch(error => {
         console.log('Payment error ', JSON.parse(error));
         alert('There was an issue with your payment. Please make sure to use provided credit cart info.')
      })
   }
   return (
      <StripeCheckout 
         label="Pay Now"
         name="Clothing Shop LTD"
         billingAddress
         shippingAddress
         description={`Your total is ${price} $`}
         amount={stripePrice}
         panelLabel="Pay Now"
         token={onToken}
         stripeKey={publishableKey}
      />
   );
};

export default StripeCheckoutButton;