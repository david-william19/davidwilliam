import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    height: 500px;
    margin-top: 100px;
    padding: 0 50px;
    flex: 1 1;

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const IconContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 768px){
        width: 110px;
        display: flex;
        justify-content: center;
    }
`

export const ImageContainer = styled.div`
    width: 50%;
    padding: 0;
    gap: 10px;
    display: flex;
    align-items: flex-end;
`

export const Image = styled.img`
    width: 48%;
    padding: 0;
    margin: 0;
    border-radius: 10px;
    object-fit: cover;
    object-position: center center;
    @media only screen and (max-width: 768px){
        display: none;
    }
`

export const ImageIcon = styled.img`
    width: 200px;
    object-fit: cover;
    @media only screen and (max-width: 768px){
        width: 80px;
    }
`