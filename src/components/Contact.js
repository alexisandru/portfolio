import React, { useRef }from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b3xb8h8', 'template_bu683q6', form.current, 'Ss46DmX6tAQfiNpkr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Container id="contact">
      <Title>Contact</Title>
      <Form ref={form} onSubmit={sendEmail}>
        <Label>Name:</Label>
        <Input type="text" name="name" required />
        <Label>Email:</Label>
        <Input type="email" name="email" required/>
        <Label>Message:</Label>
        <Message name="message" required></Message>
        <Submit type="submit"/>
      </Form>
    </Container>
  )
}

export default Contact

const Container = styled.article`

  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};

  height: 100vh;

  display: flex;
  
  align-items: center;
  flex-direction: column;
`

const Title = styled.h2`
  margin-top: 70px;
  width: 100%;

  display: flex;
  flex-direction: row;

  font-size: 2em;
  font-family: 'Playfair Display', serif;

  &:before {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid ${props => props.theme.accentColor};
    margin: auto 10px auto auto;
  }

  &:after {
    content: "";
    flex: 6 1;
    border-bottom: 1px solid ${props => props.theme.accentColor};
    margin: auto auto auto 10px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  flex: 1; 
  justify-content: center;

  @media screen and (max-width: 650px) {
    width: 90%;
  }
`

const Label = styled.label`
  font-size: 1.1em;
  margin-bottom: 5px;
  font-weight: 500;
  &:not(:first-child) {
    margin-top: 20px;
  }
`

const Input = styled.input`
  font-size: 1em;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: ${props => props.theme.inputBackground};
  border: 1px solid rgba(0,0,0,0.1);
  outline-color: rgba(0,0,0,0.5);
  color: ${props => props.theme.color};
`

const Message = styled.textarea`
  height: 180px;
  resize: none;
  font-size: 1em;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: ${props => props.theme.inputBackground};
  border: 1px solid rgba(0,0,0,0.1);
  outline-color: rgba(0,0,0,0.5);
  color: ${props => props.theme.color};
`

const Submit = styled.input`
  align-self: center;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => props.theme.accentColor};
  color: #fff;
  font-size: 1.1em;
  margin-top: 15px;

  &:hover {
    background-color: ${props => props.theme.accentColor}e6;
  }
`