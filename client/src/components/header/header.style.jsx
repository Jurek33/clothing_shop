import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
   height: 70px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 25px;
   align-items: center;
   margin-top: 20px;

   @media only screen and (max-width: 450px) {
      height: 70px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
      align-items: center;
      margin-top: 20px;
   }
`;
export const LogoContainer = styled(Link)`
   height: 100%;
    width: 70px;
    padding: 5px;

    @media only screen and (max-width: 450px) {
      height: 100%;
      width: 15%;
      padding: 5px;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
   padding: 10px 15px;
   font-size: 1.2em;
   cursor: pointer;
   &:hover {
   background-color: rgb(227, 227, 227);
   }

   @media only screen and (max-width: 350px) {
      padding: 5px 7px;
   }
`;


