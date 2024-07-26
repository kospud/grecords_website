import React from 'react'
import styled from 'styled-components'


const MenuContainer = styled.div`
    color: white;
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? '0' : '-97dvh')};
    width: 100vw;
    height: 97dvh;
    z-index: 1;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    overflow: hidden;
    box-shadow: inset  0px 10px 50px 10px black;
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.479));
    transition: top 0.3s ease-in-out;

    &::before {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        right:-10px;
        bottom: -10px;
        background-color: #a3a3a362;
    }
`

function Menu({ isOpen }) {
    return (
        <MenuContainer isOpen={isOpen}>
        </MenuContainer>
    )
}

export default Menu