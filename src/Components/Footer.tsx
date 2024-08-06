import React from 'react'
import styled, { css } from 'styled-components'
import { Blur, BottomMenuItem, MenuBlock, MenuItem, menuItemsDeskTop, menuItemsMobile, Spacer, TopMenu } from './NavBar/Menu'
import useDeviceDetect from '../CustomHooks/UseDeviceDetect'
import parse from 'html-react-parser'
import logo from "../img/logoWhite.webp";
import { FaSquareXTwitter, FaSquareYoutube, FaVk } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { useInView } from 'react-intersection-observer'

interface FadeInProps{
    inView: boolean
}
const FadeInStyle = css<FadeInProps>`
    transform: ${({ inView }) => (!inView ? 'translateY(8svh)' : 'none')};
    opacity: ${({ inView }) => (inView ? '1' : '0')};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`

const Logo = styled.img`
    width: 4dvw;
    min-width: 87px;
    z-index: 4;
    margin-bottom: 24px
`
const FooterContainer = styled.div<FadeInProps>`
    ${FadeInStyle}
    ${Blur}
    width: 100%;
    height: 52svh;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    display: flex;
    flex-direction: column;
    

    @media(max-width: 600px){
        height: 127svh;
        max-height: 900px;
    }
`

const FooterContent = styled(TopMenu)`
    width: 95%;
    height: 17svh;
    margin-left: 0;
    margin-right: 0;
    margin-top: 8svh;
    margin-bottom: 0;
    justify-content: flex-start;
    align-self: center;
    flex-grow: 1;
    @media (max-width: 600px) {
        width: auto;
        margin-top: 3svh;
        margin-left: 24px;
        margin-right: 24px;
        height: 60%;
        justify-content: space-between;
        align-self: baseline;
    }
`

const FooterBlock = styled(MenuBlock)`
    width: 20%;
    @media(max-width: 600px){
        width: 100%;
    }

`
const FooterBottomBlock = styled.div`
    height: 17svh;
    width: 95%;
    display: flex;
    align-self: center;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    height: 50%;

    @media (max-width: 600px){
        height: 15%;
        flex-direction: column;
        margin-top: 10%;
        margin-bottom: 20%;
    }
`

const FooterLine=styled.a`

font-size: 20px;

@media (max-width: 1400px) {
    font-size: 16px;
    }

@media (max-width: 1200px) {
    font-size: 12px;
    }

    @media (max-width: 1000px) {
     font-size: 10px;
    }

    @media (max-width: 600px) {
        font-size: 20px;
    }

    @media (max-width: 320px){
        font-size: 14px;
      }

`

export const SocialMedia=styled.div`
display: flex;
justify-content: space-between;
width: 20%;

@media (max-width: 600px) {
    width: 74%;
    margin-bottom: 3%;
}
a{
    color: white;
    font-size: 50px;
    object-fit: cover;

    @media (max-width: 1400px) {
        font-size: 40px;
    }

    @media (max-width: 1200px) {
    font-size: 30px;
    }

    @media (max-width: 1000px) {
        font-size: 25px
    }

    @media (max-width: 600px) {
        font-size: 50px;
    }

    @media (max-width: 320px){
        font-size: 35px;
      }

}
`
export const socialMedia=[
    {link: 'https://vk.com/grecords.studios?w=club16864937',
    logo:  <FaVk/>
    },
    {link: 'https://www.instagram.com/grecords.studios',
    logo: <FaSquareInstagram />
    },
    {link: 'https://vk.com/grecords.studios?w=club16864937',
    logo: <FaFacebookSquare />
    },
    {link: 'https://www.youtube.com/channel/UCjvQxcHBFrKzD7qWPxw7bVg',
    logo: <FaSquareYoutube />
    },
    {link: 'https://twitter.com/grecordsstudios',
    logo: <FaSquareXTwitter />
    }
]

function Footer() {

    const { isMobile } = useDeviceDetect();
    const [ref, inView]=useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <FooterContainer ref={ref} inView={inView}>
            <FooterContent>
                <FooterBlock>
                    <Logo src={logo} />
                </FooterBlock>
                {
                    isMobile ?
                        menuItemsMobile.map(item => <FooterBlock>
                            {
                                item.items.map(menuItem => <MenuItem to={menuItem.href}>{parse(menuItem.title.toUpperCase())}</MenuItem>)
                            }
                        </FooterBlock>)
                        :
                        menuItemsDeskTop.map(item => <FooterBlock>
                            {
                                item.top.map(topElem => <MenuItem
                                    to={topElem.href}>
                                    {
                                        parse(topElem.title.toUpperCase())}
                                </MenuItem>)}
                            <Spacer />
                            {item.bottom && <BottomMenuItem
                                to={item.bottom.href}>
                                {
                                    parse(item.bottom.title.toUpperCase())}
                            </BottomMenuItem>}
                        </FooterBlock>)
                }
            </FooterContent>
            <FooterBottomBlock>
                {!isMobile && <FooterLine>ВСЕ ПРАВА ЗАЩИЩЕНЫ</FooterLine>}
                <SocialMedia>
                {
                    socialMedia.map(sm=><a target='_blank' href={sm.link}>{sm.logo}</a>)
                }
                </SocialMedia>
                {isMobile && <FooterLine>ВСЕ ПРАВА ЗАЩИЩЕНЫ</FooterLine>}
                <FooterLine>РАЗРАБОТАНО BLACK SOFTWARE</FooterLine>
            </FooterBottomBlock>
        </FooterContainer>
    )
}

export default Footer