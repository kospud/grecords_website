import React, { } from 'react'
import styled from 'styled-components'

const BurgerMenuButton = styled.div`
width: 36px;
height: 36px;
z-index:4;
margin-right: 30px;
display: flex;
flex-direction: column;
justify-content: space-around;
cursor: pointer;
overflow: hidden;

div{
    background-color: #f0f0f0;
    height: 2px;
    width: 100%;
    transition: all 0.3s ease;
    transform-origin: 1px 1px;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      //transform: ${({ isOpen }) => (isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }   
}
&:hover{
        div{
        background-color: #adadad;
        }
    }
`

function BurgerMenu({ isOpen, setIsOpen }) {

    return (
        <BurgerMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <div />
            <div />
            <div />
        </BurgerMenuButton>
    )
}

export default BurgerMenu