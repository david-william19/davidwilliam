import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 100px;
`

export const EmojiContainer = styled.div`
    img {
        width: 530px;
        height: 530px;
        object-fit: cover;
        /* background-color: red; */
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
        text-align: justify;
    }
`