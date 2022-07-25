import styled from "styled-components";

export const QuoteContainer = styled.div`
    position: fixed;
    text-align: center;
    bottom: 0;
    width: 600px;
    left: 50%
    margin-left: -300px


    @media screen and (max-width: 600px){
        widht: 350px;
        margin-left: -175%;
    }
`
export const Text = styled.p`
    font-size: 1.5rem;   
`