import React from 'react'
import styled from 'styled-components'


const PreloaderContainer=styled.div`
position: fixed;
width: 100svw;
height: 100svh;
background-color: #1e1e1e;
z-index: 20;
display: flex;
justify-content: center;
align-items: center;
`

const Loader=styled.span`
    position: relative;
    width: 85px;
    height: 50px;
    background-repeat: no-repeat;
    background-image: linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0);
    background-position: 0px center, 15px center, 30px center, 45px center, 60px center, 75px center, 90px center;
    animation: rikSpikeRoll 1s linear infinite alternate;
    z-index: 21;
  
@keyframes rikSpikeRoll {
  0% { background-size: 10px 3px;}
  16% { background-size: 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px, 10px 3px}
  33% { background-size: 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px}
  50% { background-size: 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px}
  66% { background-size: 10px 3px, 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px}
  83% { background-size: 10px 3px, 10px 3px,  10px 10px, 10px 30px, 10px 50px, 10px 3px}
  100% { background-size: 10px 3px, 10px 3px, 10px 3px,  10px 10px, 10px 30px, 10px 50px}
}
`


interface PreloaderProps{
    isLoading: boolean
}
function Preloader({isLoading}: PreloaderProps) {

  return (
    isLoading && <PreloaderContainer>
        <Loader/>
    </PreloaderContainer>
  )
}

export default Preloader