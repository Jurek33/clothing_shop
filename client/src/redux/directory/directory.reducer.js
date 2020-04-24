const INITIAL_STATE = {
   sections: [
      {
         title: 'accessories',
         imageUrl:'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
         id: 1,
         linkUrl: 'shop/accessories'
      },
         {
         title: 'sneakers',
         imageUrl: 'https://images.unsplash.com/photo-1555195798-e42b6048838e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80', 
         id: 2,
         linkUrl: 'shop/sneakers'
      },
         {
         title: 'jackets',
         imageUrl: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
         id: 3,
         linkUrl: 'shop/jackets'
      },
         {
         title: 'womens',
         imageUrl: 'https://images.unsplash.com/photo-1568306415419-3265104f6a41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
         id: 4,
         size: 'large',
         linkUrl: 'shop/womens'
      },
         {
         title: 'mens',
         imageUrl: 'https://images.unsplash.com/photo-1551649478-7513a363db79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
         id: 5,
         size: 'large',
         linkUrl: 'shop/mens'
      }
   ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      default: 
         return state;
   }
}

export default directoryReducer;