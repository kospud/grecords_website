import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { PopupContext } from '../Providers/PopupProvider'

//Анимация пульсации
const pulse = keyframes`
    0% {
        transform: scale(.9);
        box-shadow: 0 0 0 0 hsla(0,0%,100%,.7)
    }

    70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px hsla(0,0%,100%,0)
    }

    to {
        transform: scale(.9);
        box-shadow: 0 0 0 0 hsla(0,0%,100%,0)
    }
`

const PointElement = styled.div`
 
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ${pulse} 1500ms infinite;
  
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.7);
  box-sizing: border-box;
  transition: box-shadow 5s;

  &:before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: transparent;
    box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0);
  }

  &:hover:before {
    box-shadow: inset 0 0 0 1000px #ffffff;
  }
`

function Point({ point }) {

    const { setIsOpen, setCurrentIndex } = useContext(PopupContext);
    return (
        <PointElement
            style={{ bottom: point.bottom, left: point.left }}
            onClick={() => PointClick()}
        />
    )

    function PointClick() {
        setIsOpen(true);
        setCurrentIndex(point.index);
    }
}

export default Point