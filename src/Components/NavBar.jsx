import React, { useState } from 'react'
import logo from "../img/logoWhite.png"
import styled from 'styled-components'
import BurgerMenu from './BurgerMenu'
import Menu from './Menu'

const Logo = styled.img`
    width: 87px;
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
                <BurgerMenu isOpen={menuIsOpen} setIsOpen={setMenuOpen} />
            </NavBarElement>
            <Menu isOpen={menuIsOpen}/>
        </NavBarContainer>
    )
}

export default NavBar