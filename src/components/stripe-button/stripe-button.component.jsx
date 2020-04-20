import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
   const stripePrice = price * 100;
   const publishableKey = 'pk_test_DLcFSwMlT3HQDqzq6bM8v2qE00VKE3ctQe';
   const onToken = token => {
      console.log(token);
      alert('Payment Successfull');
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