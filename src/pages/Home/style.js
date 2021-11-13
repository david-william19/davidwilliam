import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 100px;

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const EmojiContainer = styled.div`
    img {
        height: 530px;
        object-fit: cover;
        @media only screen and (max-width: 768px) {
            height: 210px;
    }
    }
`

export const TextContainer = styled.div`
    padding: 20px;
    width: 650px;
    color: #EFEFEF;
    margin-left: 90px;
    /* background-color: blue; */
    p {
        font-size: 20px;
    }
    @media only screen and (max-width: 768px) {
            margin-left: 0;
            text-align: center;
    }
    @media only screen and (max-width: 425px) {
            margin-left: 0;
            text-align: center;
            width: 250px;
    }
`

export const Title = styled.h2 `
    font-size: 60px;
    text-shadow: 2px 2px 15px #000000;
`