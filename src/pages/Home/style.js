import styled from 'styled-components'

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

export const EmojiContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        object-fit: cover;
        @media only screen and (max-width: 768px) {
            height: 210px;
        }
    }
`

export const TextContainer = styled.div`
    height: 100%;
    width: 50%;
    color: #EFEFEF;
    font-size: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: blue; */
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
    font-size: 2.5rem;
    text-shadow: 2px 2px 15px #000000;
    margin-bottom: 20px;
`