import styled from "styled-components";

export const Div = styled.div`
display: flex;
flex-direction: row !important;
@media  (max-width: 576px){
        flex-direction: column !important;
        text-align: center;
}
`;
