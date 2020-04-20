import styled, { css } from 'styled-components';

const buttonStyles = css`
   background-color: black;
   color: white;
   border: none;
   &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
   }
`;

const invertedButtonStyles = css`
   background-color: black;
   color: white;
   border: none;

   &:hover {
   background-color: white;
   color: black;
   border: 1px solid black;
   }
   @media only screen and (max-width: 450px) {
      line-height: unset;
   }
`;

const googleSignInStyles = css`
   background-color: #4285F4;
    color: white;

    &:hover {
      background-color: #357AE8;
      border: none;
    }
`;

const getButtonStyles = props => {
   if(props.isGoogleSignIn) {
      return googleSignInStyles;
   }

   return props.inverted ? invertedButtonStyles : buttonStyles;
}


export const CustomButtonContainer = styled.button`
   min-width: 135px;
   width: auto;
   height: 50px;
   letter-spacing: 0.5px;
   line-height: 50px;
   padding: 0 35px 0 35px;
   text-transform: uppercase;
   font-weight: bolder;
   cursor: pointer;

   ${getButtonStyles}
`;