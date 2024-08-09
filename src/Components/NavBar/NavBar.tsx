import React, { useState } from 'react'
import styled from 'styled-components'
import BurgerMenu from './BurgerMenu'
import Menu from './Menu'
import logo from "../../img/logoWhite.webp";
import { Link } from 'react-router-dom';

const Logo = styled.img`
    width: 4dvw;
    min-width: 57px;
    z-index: 4;
    margin-left: 30px;
    margin-top: 24px;
    margin-bottom: 24px;
    @media (max-width: 600px){
        margin-left: 24px;
    }
`

const NavBarContainer = styled.div`
    position: absolute;
    width: 100%;
    z-index: 1;
`

const NavBarElement = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
function NavBar() {

    const [menuIsOpen, setMenuOpen] = useState(false)

    const logoClick=()=>{
        setMenuOpen(false)
    }
    return (
        <NavBarContainer>
            <NavBarElement>
                <Link to='/' style={{zIndex: 4}} onClick={logoClick}><Logo src={logo} /></Link>
                <Menu isOpen={menuIsOpen} setIsOpen={setMenuOpen} />
                <BurgerMenu isOpen={menuIsOpen} setIsOpen={setMenuOpen} />
            </NavBarElement>
        </NavBarContainer>
    )
}

export default NavBar