import React from 'react'
import styled from 'styled-components'
import useDeviceDetect from '../CustomHooks/UseDeviceDetect'
import links from '../links'

export const BackGroundBlur = styled.div`
    overflow: hidden;
    box-shadow: inset  0px 10px 50px 10px black;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.479));
    -webkit-filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.479));

    &::after{
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        right:-10px;
        bottom: -10px;
        background-color: #a3a3a362;
    }
`
const MenuContainer = styled(BackGroundBlur)`
    position: absolute;
    top: -120dvh;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(120dvh)' : 'none')};
    width: 100vw;
    height: 97dvh;
    z-index: 2;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    transition: transform 0.3s ease-in-out;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;

`
const MenuContentWidth = styled.div`
    margin-left: 21vw;
    margin-right: 115px;
    @media (max-width: 600px) {
    margin-left: 30px;
    margin-right: 30px;
    }
    z-index: 3;
`

const TopMenu = styled(MenuContentWidth)`

    display: flex;
    justify-content: space-between;
    margin-top: 3dvh;
    height: 96%;
    @media (max-width: 600px){
        margin-top: 15dvh;
        margin-bottom: 5dvh;
        flex-direction: column;
    }
`

const MenuBlock = styled.div`
    display: flex;
    flex-direction: column;
`

const MenuItem = styled.a`
    text-decoration: none;
    color: #ffffffa2;
    font-weight: 400;

    @media (max-width: 1200px) {
    font-size: 12px;
    }

    @media (max-width: 1000px) {
     font-size: 14px;
    }

    @media (max-width: 600px) {
        font-size: 20px;
    }

    @media (max-width: 320px){
        font-size: 14px;
      }

    cursor: pointer;
    letter-spacing: 0.1rem;
    transition: color 0.1s;
    margin-bottom: 1.2dvh;

    &:hover{
        color: white;
    }
`

const BottomMenuItem = styled(MenuItem)`
    //margin-bottom: 0;
    
`

const Spacer = styled.div`
flex-grow:1;
`

function Menu({ isOpen }) {

    const { isMobile } = useDeviceDetect();
    console.log(links.home);
    return (
        <MenuContainer isOpen={isOpen}>
            <TopMenu>
                <MenuBlock>
                    <MenuItem>МОСКВА</MenuItem>
                    <MenuItem>НИЖНИЙ НОВГОРОД</MenuItem>
                    <MenuItem>САМАРА</MenuItem>
                    <Spacer />
                    {!isMobile && <BottomMenuItem>АКАДЕМИЯ</BottomMenuItem>}
                </MenuBlock>
                <MenuBlock>
                    <MenuItem>МЕЧТАЙ. ДЕЛАЙ.</MenuItem>
                    <MenuItem>КОМАНДА</MenuItem>
                    <Spacer />
                    {!isMobile && <BottomMenuItem>МАГАЗИНЫ</BottomMenuItem>}
                </MenuBlock>
                <MenuBlock>
                    <MenuItem>ПРОФЕССИОНАЛАМ</MenuItem>
                    <MenuItem>ЛЮБИТЕЛЯМ</MenuItem>
                    <MenuItem>БИЗНЕСУ</MenuItem>
                    <Spacer />
                    {!isMobile && <BottomMenuItem>МЕРОПРИЯТИЯ</BottomMenuItem>}
                </MenuBlock>
                {isMobile && <MenuBlock>
                    <MenuItem>АКАДЕМИЯ</MenuItem>
                    <MenuItem>МАГАЗИНЫ</MenuItem>
                    <MenuItem>МЕРОПРИЯТИЯ</MenuItem>
                </MenuBlock>}
                <MenuBlock>
                    <MenuItem>ПОЛИТИКА<br />КОНФИДЕНЦИАЛЬНОСТИ</MenuItem>
                    <MenuItem>КОНТАКТЫ</MenuItem>
                </MenuBlock>
            </TopMenu>
        </MenuContainer>
    )
}

export default Menu