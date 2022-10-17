import React from 'react'
import styled from 'styled-components'

import react from '../assets/react.svg'

import html from '../assets/html.svg'
import css from '../assets/css.svg'
import firebase from '../assets/firebase.svg'
import c from '../assets/c.svg'
import git from '../assets/git.svg'
import style from '../assets/styled.svg'

const Skills = () => {
  return (
    <Container id="skills">
      <Title>Skills</Title>
      <Stack>
        <Tech>
          <Icon src={react} alt="al" />
          <div>
            <h3>Javascript</h3>
          </div>
        </Tech>
        <Tech>
          <Icon src={html} alt="al" />
          <div>
            <h3>HTML</h3>
          </div>
        </Tech>
        <Tech>
          <Icon src={css} alt="al" />
          <div>
            <h3>CSS</h3>
          </div>
        </Tech>
        <Tech>
          <Icon src={react} alt="al" />
          <div>
            <h3>React</h3>
          </div>
        </Tech>
        <Tech>
          <Icon src={firebase} alt="al" />
          <div>
            <h3>Firebase</h3>
          </div>
        </Tech>
        <Tech>
          <Icon src={c} alt="al" />
          <div>
            <h3>C</h3>
          </div>
        </Tech>
        <Tech>
          <Icon src={style} alt="al" />
          <div>
            <h3>Styled Components</h3>
          </div>
        </Tech>
        <Tech>
          <Icon src={git} alt="al" />
          <div>
            <h3>Git</h3>
          </div>
        </Tech>
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

  & > div > h3, p {
    cursor: default;
  }

  transition: transform .5s;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 650px) {
      padding: 10px;
  } 

`

const Icon = styled.img`
  width: 50px;
  filter: grayscale(20%);
  margin-right: 30px;
  z-index: 0;

  @media screen and (max-width: 650px) {
    width: 40px;
  } 
`