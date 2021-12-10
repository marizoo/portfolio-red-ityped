import React, { useState } from 'react'
import styled from 'styled-components';
import {mobile, secondaryColor} from '../globalStyle'

const ContactSt = styled.div`
background-color: white;
display: flex;
${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
flex: 1;
overflow: hidden;
`

const Img = styled.img`
height: 100%;
`

const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Title = styled.h2`
font-size: 30px;
`

const Form = styled.form`
width: 70%;
height: 70%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

const Input = styled.input`
width: 300px;
height: 30px;
font-size: 14px;
${mobile({ 
    width: "200px",
    height: "20px"
 })}
`

const TextArea = styled.textarea`
width: 300px;
height: 200px;
font-size: 14px;
${mobile({ 
    width: "200px",
    height: "100px"
 })}
`

const Button = styled.button`
width: 150px;
        height: 30px;
        color: white;
        background-color: ${secondaryColor};
        border: none;
        border-radius: 10px;
        font-weight: 500;
        cursor: pointer;
&:focus{
    outline: none;
}
`

const ThxMsg = styled.span`
color: green;
`

const Contact = () => {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
    return (
        <ContactSt id="contact">
            <Left>
                <Img src="./assets/shake.svg" alt=""/>
            </Left>
            <Right>
                <Title>Contact.</Title>
                <Form onSubmit={handleSubmit}>
                    <Input required type="email" placeholder="Email" />
                    <TextArea required placeholder="Message"></TextArea>
                    <Button type="submit">Send</Button>
                    {message && <ThxMsg>Thanks, I'll reply ASAP :-)</ThxMsg>}
                </Form>
            </Right>
        </ContactSt>
    )
}

export default Contact
