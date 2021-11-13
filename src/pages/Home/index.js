import React from 'react'
import { Hero, } from '../../assets';
import { Container, EmojiContainer, TextContainer, Title } from './style';

const Home = () => {
    return (
        <Container>
            <EmojiContainer>
                <img src={Hero} alt="Logo" />
            </EmojiContainer>
            <TextContainer>
                <Title>WEB DEVELOPER <br />
                    IOS DEVELOPER <br />
                    UI/UX ENTHUSIAST
                </Title>
                <p style={{fontSize: '18px'}}>hai there!, my name is david william da costa and i was so enthusiast
                    with technology website, ios app and also design app, if you want
                    ask me for project or learning just contact me!</p>
            </TextContainer>
        </Container>
    )
}

export default Home;
