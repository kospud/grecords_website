import React from 'react'
import { styled } from 'styled-components'

const TeamCardElement = styled.div`
    width: 19%;
    flex-shrink: 0;

    @media (max-width: 600px){
        min-width: 296px;
    }
`

const TeamCardContent = styled.div`
width: 90%;
height: 100%;
background-color: grey;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
color: black;
`

const TeamPhoto = styled.img`
width: 100%;
aspect-ratio: 1/1;
object-fit: cover;
background-color: white;
position: relative;
margin-bottom: 2.5svh;

@media(max-width: 600px){
    margin-bottom: 2.8svh;
}

&::before{
    font-size: 1.4svw;
    position: absolute;
    top:50%;
    left:50%;
    opacity: 0.5;
    transform:translate(-50%, -50%); 
}
`

const TeamName = styled.a`
font-size: 1.2svw;
width: 90%;
margin-bottom: 1.25svh;

@media (max-width: 600px){
    font-size: 12px;
    margin-bottom: 1.3svh;
    font-weight: 600;
    
}
`

const TeamReview = styled.a`
display: inline-block;
width: 90%;
font-size: 0.9svw;
margin-bottom: 2.5svh;

@media (max-width: 600px){
    font-size: 12px;
}
`

function TeamCard() {
    return (
        <TeamCardElement>
            <TeamCardContent>
                <TeamPhoto alt='Картинка'/>
                <TeamName>НАЗВАНИЕ КОМАНДЫ</TeamName>
                <TeamReview>Здесь могут быть отзывы, но надо смотреть сколько влезет текста</TeamReview>
            </TeamCardContent>
        </TeamCardElement>
    )
}

export default TeamCard