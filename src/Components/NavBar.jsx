import React, { useState } from 'react'
import logo from "../img/logoWhite.webp"
import styled from 'styled-components'
import BurgerMenu from './BurgerMenu'
import Menu from './Menu'

const Logo = styled.img`
    width: 4dvw;
    min-width: 57px;
    z-index: 4;
    margin-left: 30px;
    margin-top: 24px;
    margin-bottom: 24px
`

const NavBarContainer = styled.div`
    position: absolute;
`

const NavBarElement = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
function NavBar() {

    const [menuIsOpen, setMenuOpen] = useState(false)
    return (
        <NavBarContainer>
            <NavBarElement>
                <Logo src={logo}/>
                <Menu isOpen={menuIsOpen}/>
                <BurgerMenu isOpen={menuIsOpen} setIsOpen={setMenuOpen} />
            </NavBarElement>
        </NavBarContainer>
    )
}

export default NavBar