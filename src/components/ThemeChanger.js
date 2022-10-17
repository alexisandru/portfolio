import React, { useState } from 'react'
import styled from 'styled-components'

import theme from '../assets/theme.svg'

const ThemeChanger = ({changeTheme, changeAccentColor}) => {

  const [show, setShow] = useState(false)

  return (
    <Container
        onMouseEnter={() => setShow(!show)}
        onMouseLeave={() => setShow(!show)}
    >

      <Dropdown show={show} >
        <Colors>
          <Color color={"#ef9a9a"} onClick={() => changeAccentColor("#ef9a9a")}></Color>
          <Color color={"#b39ddb"} onClick={() => changeAccentColor("#b39ddb")}></Color>
          <Color color={"#90caf9"} onClick={() => changeAccentColor("#90caf9")}></Color>
          <Color color={"#fc9814"} onClick={() => changeAccentColor("#fc9814")}></Color>
          <Color color={"#cfcfcf"} onClick={() => changeAccentColor("#cfcfcf")}></Color>
        </Colors>

        <Themes>
          <Theme onClick={() => changeTheme('light')}>Light</Theme>
          <Theme onClick={() => changeTheme('dark')}>Dark</Theme>
        </Themes>
      </Dropdown>

      <IconDiv>
        <Icon 
          src={theme} 
          alt="theme"
        />  
      </IconDiv>
      

    </Container>
  )
}

export default ThemeChanger

const Container = styled.div`
  position: fixed;
  bottom: 25px;
  left: 20px;

  z-index: 2;

  color: ${props => props.theme.color};
`


const Dropdown = styled.div`
  display: ${props => props.show ? "flex" : "none"};
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 15px;
  margin-bottom: 10px;

  background-color: #fff;
  padding: 10px;

  background-color: ${props => props.theme.secondaryBackground};

  
  flex-direction: column;
  align-items: center;

   box-shadow:
    0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.2),
    0 16px 16px hsl(0deg 0% 0% / 0.2)
  ;  
`

const Colors = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
`

const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;

  &:hover {
    border: 1px solid rgba(0,0,0,0.4);
  }
`

const Themes = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
`

const Theme = styled.div`
  flex-grow: 1;
  text-align:center;
  font-size: 1.1em;
  border-radius: 10px;

  padding: 10px;

  &:hover {
    background-color: rgba(0,0,0,0.15);
    cursor: pointer;
  }
  
`


const Icon = styled.img`
  width: 35px;
  margin: 5px;

  filter: ${props => props.theme.icon};

`

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  background-color: ${props => props.theme.secondaryBackground};

  width: min-content;

  box-shadow:
    0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.2),
    0 16px 16px hsl(0deg 0% 0% / 0.2)
  ;

  border-radius: 50%;
  border: 1px solid rgba(0,0,0,0.2);
`