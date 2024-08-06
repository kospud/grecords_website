import styled, { css } from "styled-components"
import FadeInComponent from "./FadeInComponent"

//Контейнер страницы
export const PageContainer = styled.div`
width: 100%;
//position: relative;
background-color: rgba(30, 30, 30, 1);
`
interface TopBlockProps{
    src: string
}
//Верхний блок
export const PageTopBlock = styled.div<TopBlockProps>`
background-image: ${({src})=>`url(${src})`};
background-size: cover;
background-repeat: no-repeat;
height: 100svh;
position: relative;

a{
    position: absolute;
    top:50%;
    left:50%;
    width: 71%;
    transform:translate(-50%, -50%); 

    font-size: 4svw;
    text-align: center;
    font-weight: 600;

    @media (max-width: 600px){
        font-size: 36px;
        text-align: left;
        width: 79%;
    }
    @media (max-width: 360px){
        font-size: 32px;
      }
}

img{
    position: absolute;
    top: 76%;
    left: 95%;
    width: 2%;
}
`
//контент
export const PageContent = styled.div`
//position: relative;
display: flex;
flex-direction: column;
align-items: center;

`

//Большой заголовок
export const BigHeader = styled(FadeInComponent)`
margin: 0;
margin-top: -2.2svw;
margin-bottom: 4.2svh;
width: 100%;
font-size: 10svw;
text-align: center;
font-weight: 900;
letter-spacing: -0.4svw;

@media (max-width: 600px){
    font-size: 14svw;
    margin-top: 2.7svh;
    margin-bottom: 4svh;
}
`
//Элемент картинки на всю ширину экрана
export const FullWidthImg = styled(FadeInComponent)`
object-fit: cover;
width: 100%;

@media (max-width: 600px){
    height: 45svh;
    object-fit: cover;
    object-position: 35% 0;
    overflow: hidden;
}
`
//Блок с колонками
export const ColumnsBlock = styled(FadeInComponent)`
width: 95%;
display: flex;
margin-top: 4.2svh;
margin-bottom: 8svh;

@media (max-width: 600px){
    flex-direction: column;
    margin-top: 2.1svh;
    margin-bottom: 4svh;
}
`
//Заголовок поменьше
export const ColumnsBlockHeader = styled.h2`
    margin: 0;
    font-size: 36px;
    font-weight: 400;
    flex-grow: 1;
    max-width: 40%;

    @media (max-width: 1600px){
        font-size: 32px;
      }

    @media (max-width: 1400px){
        font-size: 28px;
      }

    @media (max-width: 600px){
      font-size: 16px;
      max-width: 100%;
      padding-left: 3%;
    }

    @media (max-width: 360px){
        font-size: 24px;
      }
`
//стиль для текста в колонках
export const ColumnsTextStyle = css`
    font-size: 18px;
    font-weight: 300;

    @media (max-width: 1600px){
        font-size: 16px;
      }

    @media (max-width: 1400px){
        font-size: 14px;
      }

    @media (max-width: 600px){
      font-size: 16px;
    }

    @media (max-width: 360px){
        font-size: 14px;
      }
`
//Текст, занимающий две колонки
export const TwoColumnsText = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    padding-right: 5px;
    ${ColumnsTextStyle}

    a{
        display: block;
        width: 94%;
    }

    @media (max-width: 800px){
        width: 60%
        
    }

    @media (max-width: 600px){
    width: 100%;
    align-items: center;
    }

`
//Текст, занимающий одну колонку
export const OneColumnText = styled.div`
    ${ColumnsTextStyle}
    width: 20%;
    display: flex;
    flex-direction: column;
    
    a{
        display: block;
        width: 94%;
    }

    @media (max-width: 800px){
        width: 30%;
    }

    @media (max-width: 600px){
    width: 100%;
    align-items: center;
    }
`
//Большой мотивирующий текст
export const BigMotivationText = styled(FadeInComponent)`
    font-size: 4svw; 
    margin-top: 11svh;
    margin-bottom: 1.4svh;
    grid-column-start: 1;
    grid-column-end: 7;
    text-align: center;
    width: 95%;
    height: fit-content;
    font-weight: 500;

    @media (max-width: 600px){
        width: 99%;
        font-size: 7svw;
        margin-top: 8svh;
        margin-bottom: 4svh;
    }
`
//Пространство в flex контейнере
export const Spacer = styled.div`
    flex-grow: 1;
    height: 4svh;
    @media (max-width: 800px){
        min-width: 10%;
    }
`
//Блок с картинками
export const ImgCarousel = styled(FadeInComponent)`
display: flex;
width: 95%;
overflow-x: auto;
margin-bottom: 7.4svh;

@media (max-width: 600px){
    width: 100%;
}
`
//Элемент блока с картинками
export const ImgCarouselItem = styled.div`
width: 20%;
flex-shrink: 0;
    img{
        width: 94%;
        object-fit: cover;
    }

    @media (max-width: 800px){
        width: 30%;
    }

    @media (max-width: 600px){
    width: 72%;
    
    //max-width: none;
    }
`
//Текстовый блок элемента с картинками шириной в 1 столбец
export const ImgCarouselTextItem = styled(ImgCarouselItem)`
    a{
        display: block;
        width: 94%;
        ${ColumnsTextStyle}
    }

    @media (max-width: 600px){
        width: 82%;
        margin-left: 4%;
    }
`
//Широкая картинка с отступами
export const ImgWithGap = styled(FullWidthImg)`
    width: 95%;
    margin-bottom: 4svh;

    @media (max-width: 600px){
        width: 100%;
    }
`