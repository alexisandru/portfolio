import React from 'react'
import styled from 'styled-components'

import data from '../assets/data.json'

const Skills = () => {

  const techs = data.skills.map(tech => {
    const icon = require(`../assets/${tech.image}.svg`)
    return (
      <Tech key={tech.id}>
        <Icon src={icon} alt={tech.image}/>
        <div>
          <h3>{tech.name}</h3>
        </div>
      </Tech>
    )
  })

  return (
    <Container id="skills">
      <Title>Skills</Title>
      <Stack>
        {techs}
      </Stack>
    </Container>
  )
}

export default Skills

const Container = styled.article`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
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



const Stack = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  align-content: center;
  flex: 1;  

  @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
  } 
`

const Tech = styled.div`
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 10px;
  padding: 30px 30px;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.secondaryBackground};
  box-shadow: 0px 3px 24px 2px rgba(0,0,0,0.08);
  transition: transform .5s;

  & > div > h3, p {
    cursor: default;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 650px) {
      padding: 10px;
  } 

`

const Icon = styled.img`
  width: 50px;
  filter: grayscale(30%);
  margin-right: 30px;
  z-index: 0;

  @media screen and (max-width: 650px) {
    width: 40px;
  } 
`

