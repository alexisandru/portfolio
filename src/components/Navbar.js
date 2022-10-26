import React, { useRef } from 'react'
import styled from 'styled-components'

import menu from '../assets/menu.svg'
import close from '../assets/close.svg'

const Navbar = () => {
  let nav = useRef(null)

  const open = () => {
    nav.current.style.width = '60%';
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
    nav.current.style.display = 'flex';
  }

  const closeSide = () => {
    nav.current.style.width = '0';
    document.body.style.overflow = 'unset';
    nav.current.style.display = 'none';
  }

  return (
    <Header>
      <Title>Ian Alexis</Title>
      <Icon 
        d="true" 
        src={menu} 
        onClick={() => open()}
      />
      <Nav ref={nav}>
        <IconClose 
          d="true" 
          src={close} 
          onClick={() => closeSide()}
        />
        <Link href="!#" onClick={(e) => {e.preventDefault(); window.location.replace('/#about');}}>About</Link>
        <Link href="!#" onClick={(e) => {e.preventDefault(); window.location.replace('/#skills');}}>Skills</Link>
        <Link href="!#" onClick={(e) => {e.preventDefault(); window.location.replace('/#projects');}}>Projects</Link>
        <Link href="!#" onClick={(e) => {e.preventDefault(); window.location.replace('/#contact');}}>Contact</Link>
      </Nav>
    </Header>
  )
}

export default Navbar

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};

  @media screen and (max-width: 650px) {
    padding: 5px 15px;
    overflow: hidden;
  }
`
const Title = styled.h1`
  cursor: pointer;
  font-family: 'Playfair Display', serif;
  color: ${props => props.theme.color};
`

const Icon = styled.img`
  width: 25px;

  @media screen and (min-width: 650px) {
    display: ${props => props.d ? "none" : ""}; 
  }
  
`

const IconClose = styled(Icon)`
  align-self: flex-end;
  width: 30px;
`


const Nav = styled.nav`
  width: 40%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  // test

  @media screen and (max-width: 650px) {
    position: fixed;
    height: 100%;
    z-index: 3;
    top: 0;
    right: 0;
    overflow: hidden;  
    width: 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 0px;
    box-shadow: -50px 0px 140px 9px rgba(0,0,0,0.48);  
  }
  

`

const Link = styled.a`
  color: ${props => props.theme.color};
  text-decoration: none;
  text-align: center;
  flex-grow:1;
  padding: 10px 0;
  border-radius: 10px;

  &:hover {
    background-color: ${props => props.theme.accentColor}99;
  }

  @media screen and (max-width: 650px) {
    flex-grow: 0;
    width: 100%;
    font-size: 1.3em;
  }
`