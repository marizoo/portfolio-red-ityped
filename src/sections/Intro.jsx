import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {init} from 'ityped'
import { mobile, secondaryColor } from '../globalStyle'
import './intro-ityped.css'


const Container = styled.div`
background-color: white;
display: flex;
${mobile({
    flexDirection: "column",
    alignItems: "center"
})}
`

const Left = styled.div`
flex: 0.5;
overflow: hidden;
`

const ImgContainer = styled.div`
width: 700px;
height: 700px;
background-color: ${secondaryColor};
border-radius: 50%;
display: flex;
align-items: flex-end;
justify-content: center;
float: right;
${mobile({
    alignItems: "flex-start"
})}
`

const ImgPerson = styled.img`
height: 90%;
${mobile({ height: "50%" })}
`

const Right = styled.div`
flex: 0.5;
position: relative;
`

const Wrapper = styled.div`
width: 100%;
height: 100%;
padding-left: 50px;
display: flex;
flex-direction: column;
justify-content: center;
${mobile({
    paddingLeft: "0",
    alignItems: "center"
})}
`

const Greetings = styled.h2`
font-size: 35px;
`

const Name = styled.h1`
font-size: 60px;
margin: 10px 0;
${mobile({ fontSize: "40px" })}
`

const TitleTyped = styled.h3`
font-size: 30px;
${mobile({ fontSize: "20px" })}
`

const TypedIt = styled.span`
font-size: inherit;
color: ${secondaryColor};
`

const Aa = styled.a`
position: absolute;
bottom: 10px;
left: 40%;
`

const IconDown = styled.img`
width: 30px;
animation: arrowBlink 2s infinite;

@keyframes arrowBlink {
    100%{
        opacity: 0;
    }
}
`

const Intro = () => {
    const textRef = useRef();

    useEffect( () => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Designer", "Content Creator"],
        });
    }, []);


    return (
        <Container>
            <Left>
                <ImgContainer>
                    <ImgPerson src="./assets/man.png" alt="profile photo"/>
                </ImgContainer>
            </Left>

            <Right>
                <Wrapper>
                    <Greetings>Hi There, I'm</Greetings>
                    <Name>Billie Eilish</Name>
                    <TitleTyped>
                        Freelance <TypedIt  ref={textRef}></TypedIt>
                    </TitleTyped>
                </Wrapper>
                <Aa href="#portfolio">
                    <IconDown src="./assets/down.png" alt="down arrow icon"/>
                </Aa>
            </Right>
        </Container>
    )
}

export default Intro
