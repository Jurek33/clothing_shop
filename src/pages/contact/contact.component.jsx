import React from 'react';
import './contact.style.scss'

const ContactPage = () => (
   <div className="contact-page">
      <h2> Contact Us </h2> 
         <div className="contact-details">
            <div className="detail">
               <span className="title">Customer Service</span> 
               <span>email: clothing-shop-service@gmail.com</span>
               <span>tel: +1(786)111-1111</span>
            </div>
            <div className="detail"> 
               <span className="title">Cooperation</span> 
               <span>email: clothing-shop-cooperation@gmail.com</span>
               <span>tel: +1(786)111-1112</span>
            </div>
            <div className="detail"> 
               <span className="title">Marketing</span> 
               <span>email: clothing-shop-marketing@gmail.com</span>
               <span>+1(786)111-1113</span>
            </div>
            <span>Clothing Shop LTD, 1234 SW 1st St, Suit 1, Miami, FL, 33111</span>
         </div>
   </div>
);

export default ContactPage;