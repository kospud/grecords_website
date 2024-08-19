import React, { useContext, useEffect, useState } from 'react'
import gradientImg from "../../img/manifesto/gradient.webp"
import scrollImg from "../../img/Scroll.webp"
import useDeviceDetect from '../../CustomHooks/UseDeviceDetect'
import rectangle13 from '../../img/manifesto/Rectangle 13.webp'
import rectangle16 from '../../img/manifesto/Rectangle 16.webp'
import rectangle11 from '../../img/manifesto/Rectangle 11.webp'
import rectangle12 from '../../img/manifesto/Rectangle 12.webp'
import rectangle14 from '../../img/manifesto/Rectangle 14.webp'
import rectangle18 from '../../img/manifesto/Rectangle 18.webp'
import rectangle15 from '../../img/manifesto/Rectangle 15.webp'
import rectangle17 from '../../img/manifesto/Rectangle 17.webp'
import Footer from '../Footer'
import parse from 'html-react-parser'
import { PageContainer, PageTopBlock, PageContent, BigHeader, 
    BigMotivationText, ColumnsBlock, ColumnsBlockHeader, Spacer, 
    TwoColumnsText, OneColumnText, ImgCarousel, ImgCarouselItem, ImgCarouselTextItem } from '../PagesBlocks'
import Gradient from '../Gradient'
import { FadeInImage } from '../FadeInImage'
import Preloader from '../Preloader'
import { loadImage } from '../Team/Team'
import { PageScrollContainer } from '../PageSmoothScrollContainer'
import { GradientContext } from '../../Providers/GradientProvider'


//Текст в самом верхнем блоке страницы
const motivationText = 'Тут нужен какой-то мотивирующий текст примерно в три строчки. Или четыре. возможно пять? Или нет?';
//Большой заголовок страницы
const bigHeader = 'заголовок'
//текст после картинки на всю ширину
const firstMotivationPhrase = 'Тут нужен какой-то мотивирующий текст примерно в три строчки.'
//Тут начинает текстовый контент
//Заголовок блока с текстом
const firstSmallerHeader = 'Заголовок поменьше'
const TwoColumnTextFirstParagraph = 'Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала.Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом со.'
const TwoColumnTextSecondParagraph = 'Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала.Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом со.'
const firstOneColumnText = 'Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала.Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом со.'
const secondOneColumnText = 'Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала. Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. '
//Новый блок после карусели картинок
const secondMotivationPhrase = 'Тут нужен какой-то мотивирующий текст примерно в три строчки.'
const secondSmallerHeader = 'Заголовок поменьше'
const oneColumnTextFirstParagraph='Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала.Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом со.'
const oneColumnTextSecondParagraph='Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала.Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом со.'
const thirdOneColumnText='Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала.Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом со.'
const fourthOneColumnText='Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала.Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом со.'

const imgItemText='Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом создавать свою жизнь в соответствии с нашими желаниями и увлечениями. Нашей единственной и неизменной миссией является создание условий для раскрытия этого потенциала.Мы всей душой верим в то, что человек создан для того, чтобы творить. Мы все обладаем безграничными возможностями и потенциалом со.'

const imagesOnPage=[
rectangle13, 
rectangle16,
rectangle11,
rectangle12,
rectangle14,
rectangle18,
rectangle15,
rectangle17
]
function Manifesto() {

    const { isMobile } = useDeviceDetect();
    const [isLoading, setIsLoading]=useState(true)
    const {setVisibility}=useContext(GradientContext)!
    useEffect(()=>{
        const contentIsLoaded=()=>{
            setIsLoading(false)
        }

        window.addEventListener('load', contentIsLoaded)

        setVisibility(true)
        return ()=>{
            window.removeEventListener('load', contentIsLoaded)
            setVisibility(false)
        }
    },[])

    /*useEffect(()=>{
        window.scrollTo(0,0);
    }, [])*/


    useEffect(()=>{
        const LoadAllImages = async () => {
            
            const imagePromises=imagesOnPage.map(url=>loadImage(url))

            await Promise.all(imagePromises)
            setIsLoading(false)
    }

    LoadAllImages();
    }, [])
    return (
        <PageContainer>
            <Preloader isLoading={isLoading}/>
            <PageTopBlock src={gradientImg}>
                <a>{parse(motivationText.toUpperCase())}</a>
                {!isMobile && <img src={scrollImg} />}
            </PageTopBlock>
            <PageContent>
                <BigHeader type='h1' threshold={0.5}>{parse(bigHeader.toUpperCase())}</BigHeader>
                <FadeInImage src={rectangle13} />
                <BigMotivationText type='a' threshold={0.4}>{parse(firstMotivationPhrase.toUpperCase())}</BigMotivationText>
                <ColumnsBlock type='div' threshold={0.5}>
                    <ColumnsBlockHeader>{parse(firstSmallerHeader.toUpperCase())}</ColumnsBlockHeader>
                    {isMobile && <Spacer />}
                    <TwoColumnsText>
                        <a>{parse(TwoColumnTextFirstParagraph)}</a>
                        <Spacer />
                        <a>{parse(TwoColumnTextSecondParagraph)}</a>
                    </TwoColumnsText>
                </ColumnsBlock>
                {!isMobile && <ColumnsBlock type='div' threshold={0.5} style={{ justifyContent: 'flex-end' }}>
                    <OneColumnText>
                        <a>{parse(firstOneColumnText)}</a>
                    </OneColumnText>
                    <OneColumnText>
                        <a>{parse(secondOneColumnText)}</a>
                    </OneColumnText>
                </ColumnsBlock>}
                <ImgCarousel type='div' threshold={0.5}>
                    <ImgCarouselItem>
                        <img src={rectangle16} alt="img" />
                    </ImgCarouselItem>
                    {!isMobile && <Spacer />}
                    <ImgCarouselItem>
                        <img src={rectangle11} alt="img" />
                    </ImgCarouselItem>
                    <ImgCarouselItem>
                        <img src={rectangle12} alt="img" />
                    </ImgCarouselItem>
                    <ImgCarouselItem>
                        <img src={rectangle14} alt="img" />
                    </ImgCarouselItem>
                </ImgCarousel>
                <BigMotivationText type='a' threshold={0.4} style={{ marginBottom: '2.8svh' }}>{secondMotivationPhrase.toUpperCase()}</BigMotivationText>
                <ColumnsBlock type='div' threshold={0.5}>
                    <ColumnsBlockHeader>{parse(secondSmallerHeader.toUpperCase())}</ColumnsBlockHeader>
                    {isMobile && <Spacer />}
                    <OneColumnText>
                        <a>{parse(oneColumnTextFirstParagraph)}</a>
                        <Spacer />
                        <a>{parse(oneColumnTextSecondParagraph)}</a>
                    </OneColumnText>
                    {!isMobile && <OneColumnText>
                        <a>{parse(thirdOneColumnText)}</a>
                    </OneColumnText>}
                    {!isMobile && <OneColumnText>
                        <a>{parse(fourthOneColumnText)}</a>
                    </OneColumnText>}
                </ColumnsBlock>
                <FadeInImage withGap src={rectangle18} />
                <ImgCarousel type='div' threshold={0.5} style={{ justifyContent: isMobile ? 'flex-start' : 'flex-end' }}>
                    <ImgCarouselTextItem>
                        <a>{parse(imgItemText)}</a>
                    </ImgCarouselTextItem>
                    <ImgCarouselItem>
                        <img src={rectangle15} alt="img" />
                    </ImgCarouselItem>
                    <ImgCarouselItem>
                        <img src={rectangle17} alt="img" />
                    </ImgCarouselItem>
                </ImgCarousel>
            </PageContent>
            <Footer />
        </PageContainer>
    )
}

export default Manifesto