import React, { useEffect } from 'react'
import { BigHeader, BigMotivationText, ColumnsBlock, ColumnsBlockHeader, FullWidthImg, ImgCarousel, ImgCarouselItem, OneColumnText, PageContainer, PageContent, PageTopBlock, Spacer, TwoColumnsText } from '../PagesBlocks';
import gradient from "../../img/team/gradient.webp"
import parse from "html-react-parser"
import useDeviceDetect from '../../CustomHooks/UseDeviceDetect';
import scrollImg from '../../img/Scroll.webp'
import Footer from '../Footer';
import rectangle10 from '../../img/team/Rectangle 10.webp'
import rectangle11 from '../../img/team/Rectangle 11.webp'
import rectangle12 from '../../img/team/Rectangle 12.webp'
import rectangle13 from '../../img/team/Rectangle 13.webp'
import FadeInComponent from '../FadeInComponent';
import { styled } from 'styled-components';
import TeamLine, { TeamLineProps } from './TeamLine';
import teamMember1 from "../../img/team/teamMember1.webp"
import TeamCard from './TeamCard';

const TeamBlock = styled(FadeInComponent)`
display: flex;
flex-direction: column;
width: 75%;
margin-left: 17svw;
margin-top: 7.5svh;
margin-bottom: 9svh;
border-bottom: solid white 3px;

@media (max-width: 600px){
    width: 94%;
    margin-left: 0;
    margin-top: 5svh;
    margin-bottom: 5svh;
}
`

const TeamBlockHeader = styled(ColumnsBlockHeader)`
@media (max-width: 600px){
    font-size: 36px;
}
`

const TeamReviewsCarousel = styled(FadeInComponent)`
display: flex;
    width: 97.5%;
    justify-content: space-between;
    overflow-x: auto;
    margin-left: 2.5%;
    margin-bottom: 16svh;
    margin-top: 15svh;

    @media(max-width: 600px){
        margin-bottom: 9svh;
        margin-top: 7svh;
        margin-left: 5%;
        width: 95%;
    }
`

//#region контент на странице
const motivationText = 'Тут нужен какой-то мотивирующий текст примерно в три строчки. Или четыре. возможно пять? Или нет?'
const bigHeader = 'С чего<br/>все<br/>Началось?'
const bigHeaderMobile='С чего все<br/>началось?'
const firstOneColumnText = 'Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала.Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом со.'
const secondOneColumnText = 'Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала.'
const thirdOneColumnText = 'Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала. Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. '
const firstBigMotivationText = 'Тут нужен какой-то мотивирующий текст примерно в три строчки. '
const firstTwoColumnsText = 'Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала.Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом со.'
const secondTwoColumnsText = 'Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала.Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом со.'
const fourthOneColumnText = 'Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала.Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом со.'
const fifthOneColumnText = 'Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала.'
const sixthOneColumnText = 'Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала. Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. '
const secondBigHeder = 'Наша<br/>команда'
const fourthColumnBlockHeader = 'Залог нашего<br>успеха'
const seventhOneColumnText = 'Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала.Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом со.'
const eighthOneColumnText = 'Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. '
const ninthOneColumnText = 'Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала.Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом со.'
const seventhOneColumnTextMobile = 'Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями.'
const eighthOneColumnTextMobile = 'Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь.'
const ninthOneColumnTextMobile = 'в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала.Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом со.'
const secondBigMotivationText = 'Тут нужен какой-то мотивирующий текст примерно в три строчки. или не три? '
const imgCarousel1 = [rectangle11, rectangle12, rectangle13]
const thirthBigHeader = 'Нас<br/>Выбирают'
const teamMembers = [
    {
        teamMemberName: 'Александр Мазур',
        teamMemberRole: 'Основатель',
        teamMemberPhoto: teamMember1
    },
    {
        teamMemberName: 'Александр Мазур',
        teamMemberRole: 'Основатель',
        teamMemberPhoto: teamMember1
    },
    {
        teamMemberName: 'Александр Мазур',
        teamMemberRole: 'Основатель',
        teamMemberPhoto: teamMember1
    },
    {
        teamMemberName: 'Александр Мазур',
        teamMemberRole: 'Основатель',
        teamMemberPhoto: teamMember1
    },
    {
        teamMemberName: 'Александр Мазур',
        teamMemberRole: 'Основатель',
        teamMemberPhoto: teamMember1
    },

]
const TeamReviews = [
    {
        teamName: 'Название Команды',
        photo: '',
        text: 'Здесь могут быть отзывы, но надо смотреть сколько влезет текста'
    },
    {
        teamName: 'Название Команды',
        photo: '',
        text: 'Здесь могут быть отзывы, но надо смотреть сколько влезет текста'
    },
    {
        teamName: 'Название Команды',
        photo: '',
        text: 'Здесь могут быть отзывы, но надо смотреть сколько влезет текста'
    },
    {
        teamName: 'Название Команды',
        photo: '',
        text: 'Здесь могут быть отзывы, но надо смотреть сколько влезет текста'
    },
    {
        teamName: 'Название Команды',
        photo: '',
        text: 'Здесь могут быть отзывы, но надо смотреть сколько влезет текста'
    },
    {
        teamName: 'Название Команды',
        photo: '',
        text: 'Здесь могут быть отзывы, но надо смотреть сколько влезет текста'
    },
]
//#endregion
function Team() {

    const { isMobile } = useDeviceDetect();


    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])

    return (
        <PageContainer>
            <PageTopBlock src={gradient}>
                <a>{parse(motivationText.toUpperCase())}</a>
                {!isMobile && <img src={scrollImg} />}
            </PageTopBlock>
            <PageContent>
                <BigHeader style={{ marginTop: '8svh', marginBottom: '2.7svh' }} type='h1' threshold={0.2}>{parse(isMobile? bigHeaderMobile.toUpperCase() : bigHeader.toUpperCase())}</BigHeader>
                <ColumnsBlock type='div' threshold={0.5}>
                    <TeamBlockHeader>2010</TeamBlockHeader>
                    {isMobile && <Spacer />}
                    <OneColumnText>
                        <a>{parse(firstOneColumnText)}</a>
                    </OneColumnText>
                    {isMobile ? <Spacer /> : <OneColumnText>
                        <a>{parse(secondOneColumnText)}</a>
                    </OneColumnText>}
                    <OneColumnText>
                        <a>{parse(thirdOneColumnText)}</a>
                    </OneColumnText>
                </ColumnsBlock>
                {isMobile ? <FullWidthImg type='img' threshold={0.2} src={rectangle10} style={{ height: 'auto' }} />
                    :
                    <ImgCarousel type='div' threshold={0.5} style={{ justifyContent: 'flex-end' }}>
                        <ImgCarouselItem style={{ width: '40%' }}>
                            <img src={rectangle10} alt='photo' />
                        </ImgCarouselItem>
                    </ImgCarousel>}
                <BigMotivationText type='a' threshold={0.5}>
                    {parse(firstBigMotivationText.toUpperCase())}
                </BigMotivationText>
                <ColumnsBlock type='div' threshold={0.5}>
                    <TeamBlockHeader>2013</TeamBlockHeader>
                    {isMobile && <Spacer />}
                    <TwoColumnsText>
                        <a>{parse(firstTwoColumnsText)}</a>
                        <Spacer />
                        <a>{parse(secondTwoColumnsText)}</a>
                    </TwoColumnsText>
                </ColumnsBlock>
                <ImgCarousel type='div' threshold={0.5} style={{ justifyContent: isMobile ? 'flex-start' : 'flex-end' }}>
                    {imgCarousel1.map(item => <ImgCarouselItem>
                        <img src={item} alt='photo' />
                    </ImgCarouselItem>)}
                </ImgCarousel>
                <ColumnsBlock type='div' threshold={0.5}>
                    <TeamBlockHeader>2015</TeamBlockHeader>
                    {isMobile && <Spacer />}
                    <OneColumnText>
                        <a>{parse(fourthOneColumnText)}</a>
                    </OneColumnText>
                    {isMobile ? <Spacer /> : <OneColumnText>
                        <a>{parse(fifthOneColumnText)}</a>
                    </OneColumnText>}
                    <OneColumnText>
                        <a>{parse(sixthOneColumnText)}</a>
                    </OneColumnText>
                </ColumnsBlock>
                <BigHeader style={{ marginTop: '8svh', marginBottom: '2.7svh' }} type='h1' threshold={0.2}>{parse(secondBigHeder.toUpperCase())}</BigHeader>
                <TeamBlock type='div' threshold={0.5}>
                    {
                        teamMembers.map((member, index) => <TeamLine
                            teamMemberName={member.teamMemberName}
                            teamMemberRole={member.teamMemberRole}
                            teamMemberPhoto={member.teamMemberPhoto}
                            photoRotate={index % 2 == 0}
                        />)
                    }
                </TeamBlock>
                <ColumnsBlock type='div' threshold={0.5}>
                    <TeamBlockHeader>{parse(fourthColumnBlockHeader.toUpperCase())}</TeamBlockHeader>
                    {isMobile && <Spacer />}
                    <OneColumnText>
                        <a>{parse(isMobile ? seventhOneColumnTextMobile : seventhOneColumnText)}</a>
                    </OneColumnText>
                    {isMobile && <Spacer />}
                    <OneColumnText>
                        <a>{parse(isMobile ? eighthOneColumnTextMobile : eighthOneColumnText)}</a>
                    </OneColumnText>
                    {isMobile && <Spacer />}
                    <OneColumnText>
                        <a>{parse(isMobile ? ninthOneColumnTextMobile : ninthOneColumnText)}</a>
                    </OneColumnText>
                </ColumnsBlock>
                <BigMotivationText type='a' threshold={0.5}>{parse(secondBigMotivationText.toUpperCase())}</BigMotivationText>
                <BigHeader type='h1' threshold={0.5} style={{marginTop: isMobile? '5.7svh' : '19svh'}}>{parse(thirthBigHeader.toUpperCase())}</BigHeader>
                <TeamReviewsCarousel type='div' threshold={0.5}>
                    {
                        TeamReviews.map(rev => <TeamCard />)
                    }
                </TeamReviewsCarousel>
            </PageContent>
            <Footer />
        </PageContainer>
    )
}

export default Team;