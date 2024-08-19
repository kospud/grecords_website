import React, { useContext, useEffect, useRef, useState } from 'react'
import { ColumnsBlockHeader, PageContainer } from '../PagesBlocks'
import styled from 'styled-components'
import useDeviceDetect from '../../CustomHooks/UseDeviceDetect'
import gradient from "../../img/contacts/custom-gradient-12-2.webp"
import parse from "html-react-parser"
import { GeoObject, Map, Placemark, useYMaps, YMaps, ZoomControl } from '@pbe/react-yandex-maps'
import { MenuBlock, MenuItem } from '../NavBar/Menu'
import { PRIVACY_POLICY_ROUTE } from '../../utils/consts'
import { SocialMedia, socialMedia } from '../Footer'
import { Map as MapType } from 'yandex-maps'
import { Link, useParams } from 'react-router-dom'
import Gradient from '../Gradient'
import { GradientContext } from '../../Providers/GradientProvider'

const ContactsPageBlock = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100svh;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`
const PageHeader = styled.h1`
    text-align: center;
    margin-top: 4.4;
    margin-bottom: 14.7svh;
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
    width: 80%;

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
font-weight: 400;
opacity: 0.8;

    a{
        display: inline-block;
        text-decoration: none;
        color: white;
        //max-width: 92%;
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

&:hover{
    opacity: 1;
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

const ContactsMobileFooter = styled.div`
    background-color: rgba(30, 30, 30, 1);
    width: 100%;
    display: flex;
    flex-direction: column;
`

const smallHeader = 'Связаться<br/>с нами'
const smallHeaderMobile = 'Связаться с нами'

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
const listItemContent = (title: string, value: string, ref: string) => {
    return <Link to={ref} >{parse(`${title.toUpperCase()}<br/>${value}`)}</Link>
}

const CityContacts = {
    'nnovgorod': {
        title: 'Нижний<br/>Новгород',
        contacts: [
            {
                title: 'Телефон',
                value: '+7 (831) 211-97-19',
                mobileView: true,//Показ над картой
                ref: 'tel:8 (831) 211-97-19'
            },
            {
                title: 'Адрес',
                value: 'Нижний Новгород, улица Ошарская 77а,БЦ"London"',
                mobileView: false,
                ref: 'https://yandex.ru/maps/47/nizhny-novgorod/?ll=44.020241%2C56.305088&mode=poi&poi%5Bpoint%5D=44.020278%2C56.305150&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1056284798&z=20.31'
            },
            {
                title: 'email',
                value: 'info@grecords.ru',
                mobileView: true,
                ref: 'mailto:info@grecords.ru'
            }
        ],
        geoposition: [56.305149, 44.020354]
    }
}
function ContactsCity() {
    const { isMobile } = useDeviceDetect();
    const mapRef = useRef<MapType | undefined>(undefined)
    const [mapIsLoad, setMapLoad] = useState(false)
    const { city } = useParams<string>();

    const { setVisibility } = useContext(GradientContext)!

    useEffect(() => {

        setVisibility(true)

        return () => {
            setVisibility(false)
        }
    }, [])

    //Убираем зум по скроллу с карты
    useEffect(() => {

        if (mapRef.current) {

            mapRef.current.behaviors.disable('scrollZoom')
        }
    }, [mapIsLoad])

    if (!city) {
        return;
    }

    const cityContacts = CityContacts[city as keyof typeof CityContacts];

    const subMenu = subMenuItems.map(item => <SubMenuBlock>
        {
            item.map(({ title, ref }) => <SubMenuItem to={ref}>{parse(title.toUpperCase())}</SubMenuItem>)
        }
    </SubMenuBlock>)

    return (
        <YMaps>
            <PageContainer>
                <ContactsPageBlock>
                    <PageHeader>{parse(cityContacts.title.toUpperCase())}</PageHeader>
                    <ContactsContent>
                        <SmallHeader>{parse(`${isMobile ? smallHeaderMobile : smallHeader}`.toUpperCase())}</SmallHeader>
                        <ContactsInfo>
                            <ContactsList>
                                {
                                    cityContacts.contacts.map(({ title, value, mobileView, ref }) => isMobile ? mobileView && <ContactsListItem>{listItemContent(title, value, ref)}</ContactsListItem> : <ContactsListItem>{listItemContent(title, value, ref)}</ContactsListItem>)
                                }
                            </ContactsList>
                            {
                                isMobile && <SubMenu>{subMenu}</SubMenu>
                            }
                            <Map onLoad={() => setMapLoad(true)}
                                style={{
                                    width: '100%',
                                    aspectRatio: '26/10'
                                }} defaultState={{ center: cityContacts.geoposition, zoom: 15 }}
                                instanceRef={mapRef} >
                                <Placemark geometry={cityContacts.geoposition} properties={{ iconCaption: 'Студия звукозаписи GRecords' }} />
                                {!isMobile && <ZoomControl options={{ size: 'auto' }} />}
                            </Map>
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
                        <ContactsList style={{ marginTop: '4svh', width: '80%' }}>
                            {
                                cityContacts.contacts.map(({ title, value, mobileView, ref }) => isMobile ? !mobileView && <ContactsListItem>{listItemContent(title, value, ref)}</ContactsListItem> : <ContactsListItem>{listItemContent(title, value, ref)}</ContactsListItem>)
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
        </YMaps >
    )
}

export default ContactsCity