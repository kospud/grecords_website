import React from 'react'
import { ColumnsBlockHeader, PageContainer, } from '../PagesBlocks'
import styled from 'styled-components'
import useDeviceDetect from '../../CustomHooks/UseDeviceDetect'
import gradient from "../../img/contacts/custom-gradient-12-2.webp"
import gradientMobile from "../../img/contacts/gradient.webp"
import parse from "html-react-parser"
import { GeoObject, Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import { MenuBlock, MenuItem } from '../NavBar/Menu'
import { PRIVACY_POLICY_ROUTE } from '../../utils/consts'
import { SocialMedia, socialMedia } from '../Footer'
interface pageBlockProps {
    src: string
}
const ContactsPageBlock = styled.div<pageBlockProps>`
    background-image: ${({ src }) => `url(${src})`};
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100svh;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const PageHeader = styled.h1`
    text-align: center;
    margin-top: 4.4;
    color: rgb(255, 255, 255);
    font-size: 4svw;
    font-weight: 400;


    @media (max-width: 600px){
    margin-top: 12svh;
    margin-bottom: 4svh;
    font-size: 8.6svw;
    font-weight: 700;
    letter-spacing: -0.4svw;
    
  }
`
const ContactsContent = styled.div`
    width: 95%;
    display: flex;

    @media (max-width: 600px){
        width: 100%;
        flex-direction: column;
    }
`

const SmallHeader = styled(ColumnsBlockHeader)`
    
    @media (max-width: 600px){
      font-size: 28px;
      max-width: 100%;
      text-align: center;
      margin-bottom: 4svh;
    }
`

const ContactsInfo = styled.div`
    width: 60%;
    
    @media(max-width: 600px){
        width: 100%;
    }

`

const ContactsList = styled.div`
    width: 92%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3.6svh;
    color: rgba(255,255,255,0.8);
    @media (max-width: 600px){
        flex-direction: column;
        margin-bottom: 0;
        margin-left: 4svw;
    }
`

const SubMenu = styled.div`
    display: flex;
    width: 92%;
    margin-top: 5.5svh;

    @media (max-width: 600px){
    flex-direction: column;
    margin-top: 0;
    margin-left: 4svw;
    }
`

const SubMenuBlock = styled(MenuBlock)`
    width: 33.3%;
    @media (max-width: 600px){
    width: 100%;
    margin-bottom: 4svh;
    }
`

const SubMenuItem = styled(MenuItem)`
    opacity: 0.8;

    @media (max-width: 1600px){
        font-size: 16px;
      }

    @media (max-width: 1400px){
        font-size: 14px;
      }

    @media (max-width: 600px){
        width: 100%;
        font-size: 16px;
    }

    @media (max-width: 360px){
        font-size: 14px;
      }
`


const ContactsListItem = styled.div`
width: 33.3%;
font-size: 24px;
font-weight: 300;
    a{
        display: inline-block;
        max-width: 70%;
    }

    @media (max-width: 1600px){
        font-size: 16px;
      }

    @media (max-width: 1400px){
        font-size: 14px;
      }

    @media (max-width: 600px){
        width: 100%;
        font-size: 16px;
        margin-bottom: 4svh;
    }

    @media (max-width: 360px){
        font-size: 14px;
      }

`

const Socials = styled(SocialMedia)`
    width: 33.3%;
    margin-top: 9.8svh;
    margin-bottom: 11svh;

    @media(max-width: 600px){
        width: 80%;
        justify-content: space-around;
        align-self: center;
        margin-top: 8svh;
        margin-bottom: 7svh;
    }
`

const ContactsMobileFooter=styled.div`
    background-color: rgba(30, 30, 30, 1);
    width: 100%;
    display: flex;
    flex-direction: column;
`
const pageHeader = 'Нижний<br/>Новгород'
const smallHeader = 'Связаться с<br/>нами'
const smallHeaderMobile = 'Связаться с нами'
const contacts = [
    {
        title: 'Телефон',
        value: '+7 (831) 211-97-19',
        mobileView: true//Показ над картой
    },
    {
        title: 'Адрес',
        value: 'Нижний Новгород, улица Ошарская 77а,БЦ"London"',
        mobileView: false
    },
    {
        title: 'email',
        value: 'info@grecords.ru',
        mobileView: true
    }
]

const subMenuItems = [
    [{
        title: "Реквизиты",
        ref: ''
    },
    {
        title: "Политика обработки данных",
        ref: PRIVACY_POLICY_ROUTE
    },
    {
        title: "Разработка сайта",
        ref: 'https://www.blacksoftware.ru/'
    }],
    [{
        title: "Whats'app",
        ref: ''
    },
    {
        title: "telegram",
        ref: ''
    },
    {
        title: "viber",
        ref: ''
    }]
]
const listItemContent = (title: string, value: string) => {
    return <a>{parse(`${title.toUpperCase()}<br/>${value}`)}</a>
}


function ContactsNN() {
    const { isMobile } = useDeviceDetect();

    const subMenu = subMenuItems.map(item => <SubMenuBlock>
        {
            item.map(({ title, ref }) => <SubMenuItem to={ref}>{parse(title.toUpperCase())}</SubMenuItem>)
        }
    </SubMenuBlock>)
    
    const map=<Map style={{
        width: '100%',
        aspectRatio: '26/10'
    }} defaultState={{ center: [56.305149, 44.020354], zoom: 15 }}>
        <Placemark geometry={[56.305149, 44.020354]} properties={{ iconCaption: 'Студия звукозаписи GRecords'}} />
    </Map>

    return (
        <YMaps>
            <PageContainer>
                <ContactsPageBlock src={isMobile ? gradientMobile : gradient}>
                    <PageHeader>{parse(pageHeader.toUpperCase())}</PageHeader>
                    <ContactsContent>
                        <SmallHeader>{parse(`${isMobile ? smallHeaderMobile : smallHeader}`.toUpperCase())}</SmallHeader>
                        <ContactsInfo>
                            <ContactsList>
                                {
                                    contacts.map(({ title, value, mobileView }) => isMobile ? mobileView && <ContactsListItem>{listItemContent(title, value)}</ContactsListItem> : <ContactsListItem>{listItemContent(title, value)}</ContactsListItem>)
                                }
                            </ContactsList>
                            {
                                isMobile && <SubMenu>{subMenu}</SubMenu>
                            }
                            {map}
                            {
                                !isMobile && <SubMenu>{subMenu}</SubMenu>
                            }
                            {!isMobile && <Socials>
                                {
                                    socialMedia.map(sm => <a target='_blank' href={sm.link}>{sm.logo}</a>)
                                }
                            </Socials>}
                        </ContactsInfo>
                    </ContactsContent>
                    {isMobile && <ContactsMobileFooter>
                        {/*isMobile && map*/}
                        <ContactsList style={{ marginTop: '4svh', width: '80%'}}>
                                {
                                    contacts.map(({ title, value, mobileView }) => isMobile ? !mobileView && <ContactsListItem>{listItemContent(title, value)}</ContactsListItem> : <ContactsListItem>{listItemContent(title, value)}</ContactsListItem>)
                                }
                        </ContactsList>
                        <Socials>
                                {
                                    socialMedia.map(sm => <a target='_blank' href={sm.link}>{sm.logo}</a>)
                                }
                            </Socials>
                        </ContactsMobileFooter>}
                </ContactsPageBlock>
            </PageContainer>
        </YMaps>
    )
}

export default ContactsNN