import React, { useState } from 'react'
import styled from 'styled-components'

import todo from '../assets/todo1.png'

const ImageSlider = ({imagesData}) => {

  const [images, setImages] = useState(imagesData)
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

 
  return (
    <Container>
       {images.map((slide, index) => {
        const screen = require(`../assets/${slide}.png`)
        return (
          <Slide
            active={index === current ? true : false}
            key={index}
          >
            {index === current && (
              <Image src={screen} alt='' />
            )}
          </Slide>
        );
      })}
      
      <Buttons onClick={() => prevSlide()}>&#10094;</Buttons>
      <Buttons onClick={() => nextSlide()}>&#10095;</Buttons>
    </Container>
  )
}

export default ImageSlider


const Container = styled.div`
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;

`
const Slide = styled.div`
  opacity: ${props => props.active ? 1 : 0};
  transition-duration: ${props => props.active ? `1s` : `1s ease`};
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`

const Buttons = styled.a`
  cursor: pointer;
  position: absolute;
  
  
  padding: 15px;
  
  color: rgba(0,0,0, 0.8);
  
  font-size: 3em;
  transition: 0.6s ease; 
  border-radius: 0 3px 3px 0;
  user-select: none;

  &:last-child{
    right: 0;
    border-radius: 3px 0 0 3px;
  }
  
  &:hover {
    background-color: rgba(0,0,0,0.8);
  }
`