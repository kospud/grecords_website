import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import parse from 'html-react-parser'
import useDeviceDetect from '../../CustomHooks/UseDeviceDetect'

//Линия с именем ролью и фото
const TeamMember = styled.div`
width: 100%;
height: 13svh;
display: flex;
align-items: center;
border-top: solid white 3px;
cursor: ponter;


@media (max-width: 600px){
    height: 7.2svh;
}
`
//Имя члена команды
const TeamMemberName = styled.a`
    font-weight: 400;
    font-size: 36px;
    margin-right: 2%;

    @media (max-width: 1600px){
        font-size: 32px;
      }

    @media (max-width: 1400px){
        font-size: 28px;
      }

    @media (max-width: 600px){
      font-size: 16px;
      margin-left: 1%;
      
    }

    @media (max-width: 360px){
        font-size: 24px;
      }
`
//Роль члена команды
const TeamMemberRole = styled.a`
    font-weight: 500;
    font-size: 4svw; 
    margin-left: 2%;
    @media (max-width: 600px){
        font-size: 16px;
        margin-right: 1%;
    }
`
//фото члена команды
interface TeamMemberPhotoProps {
    rotate: boolean//Положительный или отрицательный угол наклона
    isVisible: boolean
}
const TeamMemberPhoto = styled.img<TeamMemberPhotoProps>`
width: 15svw;
object-fit: cover;
transform: ${({ rotate }) => rotate ? 'rotate(10deg)' : 'rotate(-10deg)'};
opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
transition: opacity 0.2s ease-in-out;

@media (max-width: 600px){
    width: 21svw;
}
`

export interface TeamLineProps {
    teamMemberName: string,
    teamMemberRole: string,
    teamMemberPhoto: string,
    photoRotate: boolean
}

function TeamLine({ teamMemberName, teamMemberRole, teamMemberPhoto, photoRotate }: TeamLineProps) {

    const [isPhotoVisible, setPhotoVisible] = useState(false)
    const { isMobile } = useDeviceDetect();
    const handleMouseOver = () => {
        if (isMobile) { return}
        setPhotoVisible(true);
    }

    const handleMouseOut = () => {
        if (isMobile){return}
        setPhotoVisible(false);
    }

    useEffect(() => {
        if (isMobile) {
            setPhotoVisible(true)
        } else {
            setPhotoVisible(false)
        }

    }, [isMobile])
    return (
        <TeamMember onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <TeamMemberName>{parse(teamMemberName.toUpperCase())}</TeamMemberName>
            <TeamMemberPhoto isVisible={isPhotoVisible} rotate={photoRotate} src={teamMemberPhoto} alt='photo' />
            <TeamMemberRole>{parse(teamMemberRole.toUpperCase())}</TeamMemberRole>
        </TeamMember>
    )
}

export default TeamLine