import React from 'react'
import Project from './Project'

import styled from 'styled-components'

import data from '../assets/data.json'

const Projects = () => {

  const projects = data.projects.map(project => {
    return (
      <Project data={project} />
    )
  })

  return (
    <Container id="projects">
      <div style={{height: "70px"}}></div>
      <Title>Projects</Title>

      {projects}
    </Container>
  )
}

export default Projects

const Container = styled.article`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
`

const Title = styled.h2`
  text-align: center;
  width: 100%;
  font-size: 2em;

  display: flex;
  flex-direction: row;

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