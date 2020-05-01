import React from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.style';

class ErrorBoundary extends React.Component {
   constructor() {
      super();
      this.state = {
         hasError: false
      };
   }

   static getDerivedStateFromError(err) {
      return { hasError: true };
   }

   componentDidCatch(err, info) {
      console.log(err);
   }

   render() {
      if(this.state.hasError) {
         return (
             <ErrorImageOverlay>
                <ErrorImageContainer imageUrl={'https://i.imgur.com/A040Lxr.png'}/>
                <ErrorImageText>We are sorry but this page is lost in space</ErrorImageText>
             </ErrorImageOverlay>
         )
      }
      return this.props.children;
   }
};

export default ErrorBoundary;