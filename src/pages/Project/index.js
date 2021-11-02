import React from 'react';
import { WebHiji, WebManajemen } from '../../assets';
import { projectJson } from '../../assets/dummy';
import { Container, Card, CardBody, CardImg, CardContainer, CodeButton } from './style';

const Project = () => {

    return (
        <Container>
            <h1 style={{ color: 'white', textAlign: 'center', margin: '30px', marginTop: '70px' }}>
                the project i'm working on</h1>
            <CardContainer>
                {projectJson.map((value, idx) => {
                    console.log(WebManajemen)
                    console.log(WebHiji)
                        return (< Card >
                    <CardImg src={value.photo} alt="logo" />
                    <CardBody>
                        <h2>{value.title}</h2>
                        <p>{value.description}</p>
                        <div style={{textAlign: 'center', margin: '30px 0',}}>
                            <CodeButton href={value.url}>See code</CodeButton>
                        </div>
                    </CardBody>
                </Card>)
                 })}
        </CardContainer>
        </Container >
    )
}

export default Project
