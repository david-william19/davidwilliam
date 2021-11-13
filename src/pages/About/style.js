import styled from "styled-components";

export const Container = styled.div`
    margin-top: 90px;
    display: flex;
    margin: 0 60px;
    justify-content: center;
    text-align: left;
    flex-wrap: nowrap;
    flex-grow: 2;
    h1 {
        font-size: 38px;
    }

    p {
        color: #fff;
        font-weight: 400;
        font-size: 20px;
    }

    @media only screen and (max-width: 768px) {
       
    }
`

export const IconContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

export const ImageContainer = styled.div `
    width: 50%;
`

export const Image = styled.img`
    width: 290px;
    height: 350px;
    padding: 0;
    margin: 0;
    border-radius: 10px;
    object-fit: cover;
    object-position: center center;
`

export const ImageIcon = styled.img`
    width: 200px;
    object-fit: cover;
`