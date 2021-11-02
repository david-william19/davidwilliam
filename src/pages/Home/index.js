import React, { useState } from 'react'
import { Hero, IosGamely } from '../../assets';
import { Container, EmojiContainer, TextContainer } from './style';

const Home = () => {
    return (
        <Container>
            <EmojiContainer>
                <img src={Hero} alt="Logo" />
            </EmojiContainer>
            <TextContainer>
                <h2>Helo guys...</h2>
                <p>my name is david william da costa.<br /><br /> i have an experience in <br />HTML, CSS, Javascript, PHP, MySQL, Firebase <br />
                    Bootstrap, Laravel, React, React Native <br />
                    Swift and SwiftUI.</p>
                <p>i was like to learn something new but i focusing in front end developing and also can implementation design to website or mobile.<br />
                    Creating some clean code for developing to make easy debugging and easy to read it for developer to continue the progress.</p>
            </TextContainer>
        </Container>
    )
}

export default Home;
