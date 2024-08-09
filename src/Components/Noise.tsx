import React from 'react'
import noise from '../img/noise.gif'
import { styled } from 'styled-components'

const NoiseComponent=styled.div`
    background-image: url(${noise});
    height: 100dvh;
    width: 100%;
    position: fixed;
    z-index: 10;
    opacity: 0.03;
    pointer-events: none;
`
function Noise() {
  return (
    <NoiseComponent/>
  )
}

export default Noise