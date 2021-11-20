import styled from "styled-components";
import hero from '../../images/hero-bg.jpg';
export const Background = styled.div`
   background: linear-gradient(rgb(0, 0, 0, 0.6), rgb(0, 0, 0, 0.6)), url(${hero}) no-repeat fixed;
    background-size:  cover;      
    background-position: center;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    height: 100vh;
    
    @media screen and (max-width: 576px){
        width: 100%;
    }
`;
export const P = styled.p`
    
    @media screen and (max-width: 576px){
        font-size: 1.5rem !important;
        padding: 0 5rem 0 5rem !important;
    }
`;
// export const Button = styled.button`
//     background-color: #000000 !important;
//     border-color: #39b54a !important;
//     color: #ffff !important;
//     &:hover {

//     }
    
// `;