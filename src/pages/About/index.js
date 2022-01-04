import React from 'react'
import { SekolahS1, SekolahSD, SekolahSMK } from '../../assets';
import { TextContainer } from '../Home/style';
import { Container, IconContainer, ImageContainer, Image, ImageIcon } from './style';

const About = () => {
    return (
        <Container>
            <TextContainer>
                <h1 style={{ color: 'white', fontSize: '2.5rem'}}>About me</h1>
                <p style={{ fontSize: '18px', fontWeight: 'lighter', margin: '30px 0'}}>My name is david william da costa, im from indonesia and right now im a student at one of universities in bandung
                    take major information system.<br /><br />

                    i learn programming from high school with c++ and web programming using html + css + php, from there i start
                    make some website and until universities i still make
                    website.<br /><br />

                    and oh yeah, right now i also curious about mobile app
                    especially ios app using swift and im taking some course
                    in ios dev, very excited to learn something new<br /><br /></p>
                <IconContainer>
                    <ImageIcon src={SekolahS1} />
                    <ImageIcon src={SekolahSD} />
                    <ImageIcon src={SekolahSMK} />
                </IconContainer>
            </TextContainer>
            <ImageContainer>
                <div style={{display: 'flex', flexWrap: 'wrap', flex: "1 1", gap: '10px', padding: '10px 10px', margin: '0 auto'}}>
                    <Image src="https://images.unsplash.com/photo-1584907797015-7554cd315667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" />
                    <Image src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
                    <Image src="https://images.unsplash.com/photo-1584907797015-7554cd315667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" />
                    <Image src="https://images.unsplash.com/photo-1584907797015-7554cd315667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" />
                </div>
            </ImageContainer>
        </Container>
    )
}

export default About;
