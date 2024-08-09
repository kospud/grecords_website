import React from 'react'
import { PageContainer, PageTopBlock } from '../PagesBlocks'
import gradient from "../../img/contacts/custom-gradient-12-2.webp"
import gradientMobile from "../../img/contacts/gradient.webp"
import { Blur, MenuItem } from '../NavBar/Menu'
import { styled } from 'styled-components'
import parse from 'html-react-parser'
import { Link } from 'react-router-dom'
import useDeviceDetect from '../../CustomHooks/UseDeviceDetect'
import Gradient from '../Gradient'
import { CONTACTS_NN_ROUTE } from '../../utils/consts'

const ContactsBlock=styled.div`
  ${Blur}
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 71%;
  height: 64%;
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  
  a{
    text-align: center;
    margin-top: 25svh;
    height: fit-content;
    transform: none;
    position: static;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 4svw;
    font-weight: 400;
    z-index: 1;

    @media (max-width: 600px){
    margin-top: 2svh;
    margin-bottom: 2svh;
    font-size: 8.6svw;
    font-weight: 700;
    letter-spacing: -0.4svw;
    }

  }

  @media (max-width: 600px){
    width: 92%;
    height: 70%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const ContactMenuItem=styled(MenuItem)`
    opacity: 0.8;
`

const Links=[
  {
    title: 'Москва',
    ref: ''
  },
  {
    title: 'Нижний<br/>Новгород',
    ref: CONTACTS_NN_ROUTE
  },
  {
    title: "Самара",
    ref: ''
  }
]
function Contacts() {

  const {isMobile}=useDeviceDetect();

  return (
    <PageContainer>
      <Gradient/>
        <PageTopBlock src={isMobile? gradientMobile : gradient}>
          <ContactsBlock>
          {
            Links.map(({title,ref})=><ContactMenuItem to={ref}>{parse(title.toUpperCase())}</ContactMenuItem>)
          }
          </ContactsBlock>
        </PageTopBlock>
    </PageContainer>
  )
}

export default Contacts