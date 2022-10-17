import React from 'react'
import styled from 'styled-components'

import person from '../assets/person.png'

const About = () => {
  return (
    <Container id="about">
      <Section>
        <Name>Ian Alexis Andruszyszyn</Name>
        <Description>Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Odio, commodi iusto vitae, minima vel porro natus architecto quisquam beatae ea.</Description>
      </Section>
      <Section>
        <Image src={person} alt="profile"/>
      </Section>
    </Container>
  )
}

export default About

const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 100vh;

  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  
  @media screen and (max-width: 650px) {
    height: 70vh;

    flex-direction: column-reverse;
    justify-content: center;
  }
`

const Section = styled.section`
  margin: 0 100px;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 650px) {
    margin: 0 20px;
  }
`   

const Name = styled.h1`
  font-size: 4em;
  font-family: 'Playfair Display', serif;
  align-self: flex-start;
  color: ${props => props.theme.color};

  @media screen and (max-width: 650px) {
    font-size: 2em;
  }
`

const Description = styled.p`
  font-size: 1.2em;
`

const Image = styled.img`
  width: 100%;
`