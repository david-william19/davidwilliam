import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-top: 100px;
    padding-bottom: 50px;
`

export const Card = styled.div`
    background: white;
    border-radius: 10px;
`

export const CardImg = styled.img`
    width: 100%;
    height: 250px;
    padding: 0;
    margin: 0;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
    object-position: center center;
`

export const CardBody = styled.div`
padding: 10px 20px;
font-size: 18px;
font-weight: 300;
`

export const CardContainer = styled.div`
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: 20px;
    padding: 20px;
`

export const CodeButton = styled.a`
    background-color: #FF9B6A;
    color: #000;
    padding: 10px 30px;
    border-radius: 10px;
    transition: 0.3s;
    text-decoration: none;
    :hover {
        background-color: #FF5151;
        transition: 0.3s;
    }
`