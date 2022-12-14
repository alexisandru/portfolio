import React from 'react'
import styled from 'styled-components'

import rocket from '../assets/rocket.svg'
import git from '../assets/github.svg'

import ImageSlider from './ImageSlider'

const Project = ({data}) => {
  return (
    <Container position={data.id}>
      <Section>
        <Title>{data.name}</Title>
        <Description>{data.description}</Description>
        <Stack>
          {data.tech.map(tech => <Tech>{tech}</Tech>)}
        </Stack>
        <Links>
          <Link target="_blank" href={data.live}><Icon alt="demo" src={rocket}/>Live demo</Link>
          <Github target="_blank" href={data.repo}><Icon alt="github" src={git}/>Github</Github>
        </Links>
      </Section>
      <ImageSection>
        <ImageSlider imagesData={data.images}/>
      </ImageSection>
    </Container>
  )
}

export default Project

const Container = styled.section`
  height: 80vh;

  display: grid;
  grid-template-columns:${props => props.position === 2 ? "60% 40%" : "40% 60%"};
  grid-template-rows: 1fr;
  place-items: center;

  grid-template-areas: ${props => props.position === 2 ? "'image desc'" : "'desc image'"};

  
  padding: 0 50px;

  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};

  @media screen and (max-width: 650px) {
      display: flex;
      flex-direction: column-reverse;
      padding: 0 ;
  } 
`

const Section = styled.div`
  margin: 0 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-area: desc;
  cursor: default;

  @media screen and (max-width: 650px) {
    margin: 0 20px;
  }
`   

const ImageSection = styled(Section)`
  grid-area: image;

  overflow: hidden;
  border-radius: 10px; 
  box-shadow:
    0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.2)
  ;

  @media screen and (max-width: 650px) {
    margin: 0 10px;
  }

`

const Title = styled.h2`
  font-size: 2em;
  align-self: flex-start;

  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 650px) {
    margin-top: 10px;
  }

  &:after {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid ${props => props.theme.accentColor}80;
    margin: auto auto auto 20px;
  }
`

const Description = styled.p`
  font-size: 1.2em;
  padding: 10px 0;
`


const Stack = styled.ul`
  display: flex;
  align-self: flex-start;

  list-style: none;
`

const Tech = styled.li`
  margin-right: 10px;
  color: ${props => props.theme.color}b3;
`

const Icon = styled.img`
  width: 30px;
  margin-right: 10px;
  filter: invert(100%);
`

const Links = styled.div`
  display: flex;

  gap: 20px;
  margin-top: 30px;
  @media screen and (max-width: 650px) {
    margin-top: 10px;
  }
`

const Link = styled.a`
  background-color: ${props => props.theme.accentColor};
  text-decoration: none;
  color: #fff;
    
  padding: 10px 25px;
  border-radius: 10px;

  display: flex;
  align-items: center;

  &:hover {
    background-color: ${props => props.theme.accentColor}e6;
  }
`

const Github = styled(Link)`
  background-color: rgb(35, 39, 43);

  &:hover {
    background-color: rgba(35, 39, 43, 0.9);
  }
`