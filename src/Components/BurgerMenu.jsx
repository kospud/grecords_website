import React, { } from 'react'
import styled from 'styled-components'

const BurgerMenuButton = styled.div`
  width: ${({ isOpen }) => (isOpen ? '36px' : '2vw')};
  height: ${({ isOpen }) => (isOpen ? '36px' : '12px')}; 
  min-width: 36px;
  z-index: 4;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: ${({ isOpen }) => (isOpen ? 'center' : 'space-between')}; 
  align-items: center;
  cursor: pointer;
  position: relative;
  clip-path: ${({isOpen})=>(isOpen? 'inset(7px 0px 7px 0px)' : 'none')};
  
  div {
    background-color: #dfdfdf;
    height: 2px;
    width: 100%;
    transition: transform 0.3s ease, background-color 0.1s ease;
    z-index: 4;
    
    
    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg) translate(0px,2px)' : 'rotate(0)')}; /* Поворот и сдвиг полоски */
    }
    
    &:nth-child(2) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) translate(0px,-2px)' : 'rotate(0)')}; /* Поворот и сдвиг полоски */
    }
  }
  
  &:hover {
    div {
      background-color: #adadad;
    }
  }
`;

function BurgerMenu({ isOpen, setIsOpen }) {

  return (
    <BurgerMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <div />
      <div />
    </BurgerMenuButton>
  )
}

export default BurgerMenu