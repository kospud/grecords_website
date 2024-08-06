import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import useDeviceDetect from '../../CustomHooks/UseDeviceDetect'
import parse from 'html-react-parser'
import { ACADEMY_ROUTE, BUSINES_ROUTE, CONTACTS_ROUTE, ENTHUSIATS_ROUTE, EVENTS_ROUTE, MANIFESTO_ROUTE, MOSCOW_ROUTE, NN_ROUTE, PRIVACY_POLICY_ROUTE, PROFESSIONALS_ROUTE, SAMARA_ROUTE, SHOP_ROUTE, TEAM_ROUTE } from '../../utils/consts'
import { Link } from 'react-router-dom'

export const Blur=css`
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
//Стиль для эффекта матового стекла
export const BackGroundBlur = styled.div`
    ${Blur}
`
//Контейнер меню
interface menuContainerProps {
    isOpen: boolean;
}
export const MenuContainer = styled(BackGroundBlur) <menuContainerProps>`
    position: absolute;
    top: -120svh;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(120svh)' : 'none')};
    width: 100%;
    height: 97svh;
    z-index: 2;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    transition: transform 0.3s ease-in-out;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;

`
//Подгонка контента в меню  по ширине
export const MenuContentWidth = styled.div`
    margin-left: 21dvw;
    margin-right: 115px;
    @media (max-width: 600px) {
    margin-left: 24px;
    margin-right: 24px;
    }
    z-index: 3;
`
export const TopMenu = styled(MenuContentWidth)`

    display: flex;
    justify-content: space-between;
    margin-top: 3svh;
    height: 96%;
    @media (max-width: 600px){
        margin-top: 15svh;
        margin-bottom: 5svh;
        flex-direction: column;
    }
`
export const MenuBlock = styled.div`
    display: flex;
    flex-direction: column;
`
export const MenuItem = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    font-weight: 400;
    opacity: 0.5;
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

    cursor: pointer;
    letter-spacing: 0.1rem;
    transition: color 0.2s;
    margin-bottom: 1.2svh;

    &:hover{
        opacity: 1;
    }
`
export const BottomMenuItem = styled(MenuItem)`
    //margin-bottom: 0;
    
`
export const Spacer = styled.div`
flex-grow:1;
`
interface CentrePhraseProps {
    isVisible: boolean
}
export const CenterPhrase = styled.a<CentrePhraseProps>`
    position: absolute;
    top:50%;
    left:50%;
    width: 56dvw;
    height: 35svh;
    transform:translate(-50%, -50%); 
    color: white;
    font-size: 4dvw;
    z-index: 1;
    text-align: center;
    white-space: nowrap;
    font-weight: 600;
    opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
    transition: opacity 0.2s;

    span{
        font-style: italic;
    }
`
const phrases = [
    'Студия<br/>визуализируется. Скоро<br>заработаем.',//Москва
    'Студия, где все<br/>начинается.',//НН
    'Студия<br/>визуализируется. Скоро<br>заработаем.',//Самара
    'Я в своем познании<br/>настолько<span>преисполнился</span></br>',//Академия
    'Мы всей душой <span>верим</span><br/>в то, что человек<br/>создан для того,<br/>чтобы <span>творить</span>.',//Мечтай делай
    'Мы всей душой <span>верим</span><br/>в то, что человек<br/>создан для того,<br/>чтобы <span>творить</span>.',//команда
    'Так добрый вечер,<br/>о,<span>чиназес</span>.<br>Сюда. <span>Сюда</span>',//магазины
    'ЗДЕСЬ БУДЕТ НАПИСАНО<br/>ЧТО-ТО <span>ИНТЕРЕСНОЕ,</span><br/> НО ЧТО МЫ ПОКА<br/><span>НЕ ПРИДУМАЛИ',//Профи
    'ЗДЕСЬ БУДЕТ НАПИСАНО<br/>ЧТО-ТО <span>ИНТЕРЕСНОЕ,</span><br/> НО ЧТО МЫ ПОКА<br/><span>НЕ ПРИДУМАЛИ',//Любители
    'ЗДЕСЬ БУДЕТ НАПИСАНО<br/>ЧТО-ТО <span>ИНТЕРЕСНОЕ,</span><br/> НО ЧТО МЫ ПОКА<br/><span>НЕ ПРИДУМАЛИ',//Бизнес
    'ЗДЕСЬ БУДЕТ НАПИСАНО<br/>ЧТО-ТО <span>ИНТЕРЕСНОЕ,</span><br/> НО ЧТО МЫ ПОКА<br/><span>НЕ ПРИДУМАЛИ',//мероприятия
    'ЗДЕСЬ БУДЕТ НАПИСАНО<br/>ЧТО-ТО <span>ИНТЕРЕСНОЕ,</span><br/> НО ЧТО МЫ ПОКА<br/><span>НЕ ПРИДУМАЛИ',//Политика
    'ЗДЕСЬ БУДЕТ НАПИСАНО<br/>ЧТО-ТО <span>ИНТЕРЕСНОЕ,</span><br/> НО ЧТО МЫ ПОКА<br/><span>НЕ ПРИДУМАЛИ'//Контакты
]
//Массив задающий порядок и расположение элементов в десктопной версии сайта
export const menuItemsDeskTop = [
    {
        top: [
            { title: 'Москва', href: MOSCOW_ROUTE, phraseId: 0 },
            { title: 'Нижний Новгород', href: NN_ROUTE, phraseId: 1 },
            { title: 'Самара', href: SAMARA_ROUTE, phraseId: 2 }],
        bottom: { title: 'Академия', href: ACADEMY_ROUTE, phraseId: 3 }
    },
    {
        top: [
            { title: 'Мечтай. Делай.', href: MANIFESTO_ROUTE, phraseId: 4 },
            { title: 'Команда', href: TEAM_ROUTE, phraseId: 5 }],
        bottom: { title: 'Магазины', href: 'http://muslow.tilda.ws/', phraseId: 6 }
    },
    {
        top: [
            { title: 'Профессионалам', href: PROFESSIONALS_ROUTE, phraseId: 7 },
            { title: 'Любителям', href: ENTHUSIATS_ROUTE, phraseId: 8 },
            { title: 'Бизнесу', href: BUSINES_ROUTE, phraseId: 9 }],
        bottom: { title: 'Мероприятия', href: EVENTS_ROUTE, phraseId: 10 }
    },
    {
        top: [
            { title: 'Политика<br/>конфиденциальности', href: PRIVACY_POLICY_ROUTE, phraseId: 11 },
            { title: 'Контакты', href: CONTACTS_ROUTE, phraseId: 12 }]
    }
]
//Массив, задающий порядок элементов в мобильной версии
export const menuItemsMobile = [
    {
        items: [
            { title: 'Москва', href: MOSCOW_ROUTE },
            { title: 'Нижний Новгород', href: NN_ROUTE },
            { title: 'Самара', href: SAMARA_ROUTE }]
    },
    {
        items: [
            { title: 'Мечтай. Делай.', href: MANIFESTO_ROUTE },
            { title: 'Команда', href: TEAM_ROUTE }]
    },
    {
        items: [
            { title: 'Профессионалам', href: PROFESSIONALS_ROUTE },
            { title: 'Любителям', href: ENTHUSIATS_ROUTE },
            { title: 'Бизнесу', href: BUSINES_ROUTE }]
    },
    {
        items: [
            { title: 'Магазин', href: SHOP_ROUTE },
            { title: 'Академия', href: ACADEMY_ROUTE },
            { title: 'Мероприятия', href: EVENTS_ROUTE }]
    },
    {
        items: [
            { title: 'Политика<br/>конфиденциальности', href: PRIVACY_POLICY_ROUTE },
            { title: 'Контакты', href: CONTACTS_ROUTE }
        ]
    }
]

interface MenuProps {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
function Menu({ isOpen, setIsOpen }: MenuProps) {

    const { isMobile } = useDeviceDetect();
    const [startY, setStartY] = useState(0);
    const [currentPhraseId, setCurrentPhraseId] = useState(0)
    const [phraseVisible, setPhraseVisible] = useState(false)
    //Закрытие меню по свайпу
    const handleTouchStart = (event: any) => {
        setStartY(event.touches[0].clientY)
    }
    const handleTouchMove = (event: any) => {
        const currentY = event.touches[0].clientY;
        const diffY = startY - currentY;

        if (diffY > 50) {
            setIsOpen(false)
        }
    }
    //Отображение центральной фразы при наведении
    const handleMouseOver = (phraseId: number) => {
        setCurrentPhraseId(phraseId);
        setPhraseVisible(true)
    }

    const handleMouseOut = () => {
        setPhraseVisible(false)
    }

    const menuItemClick = () => {
        setIsOpen(false)
    }
    return (
        <MenuContainer isOpen={isOpen} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            {!isMobile && <CenterPhrase isVisible={phraseVisible}>{parse(phrases[currentPhraseId].toUpperCase())}</CenterPhrase>}
            <TopMenu>
                {
                    isMobile ?
                        menuItemsMobile.map(item => <MenuBlock>
                            {
                                item.items.map(menuItem => <MenuItem to={menuItem.href} onClick={menuItemClick}>{parse(menuItem.title.toUpperCase())}</MenuItem>)
                            }
                        </MenuBlock>)
                        :
                        menuItemsDeskTop.map(item => <MenuBlock>
                            {
                                item.top.map(topElem => <MenuItem
                                    onClick={menuItemClick}
                                    onMouseOver={() => handleMouseOver(topElem.phraseId)}
                                    onMouseOut={handleMouseOut}
                                    to={topElem.href}>
                                    {
                                        parse(topElem.title.toUpperCase())}
                                </MenuItem>)}
                            <Spacer />
                            {item.bottom && <BottomMenuItem
                                onClick={menuItemClick}
                                onMouseOver={() => handleMouseOver(item.bottom.phraseId)}
                                onMouseOut={handleMouseOut}
                                to={item.bottom.href}>
                                {
                                    parse(item.bottom.title.toUpperCase())}
                            </BottomMenuItem>}
                        </MenuBlock>)
                }
            </TopMenu>
        </MenuContainer>
    )
}

export default Menu