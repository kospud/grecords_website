import React from 'react'
import { styled } from 'styled-components'
import FadeInComponent from '../FadeInComponent'
import teamMember1 from "../../img/team/teamMember1.webp"
import TeamLine from './TeamLine'

//компонент с командой студии

const TeamBlocElement = styled(FadeInComponent)`
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
//Контент для блока
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
function TeamBlock() {
  return (
    <TeamBlocElement type='div' threshold={0.5}>
        {
            teamMembers.map((member, index) => <TeamLine
            teamMemberName={member.teamMemberName}
            teamMemberRole={member.teamMemberRole}
            teamMemberPhoto={member.teamMemberPhoto}
            photoRotate={index % 2 === 0}
        />)
        }
    </TeamBlocElement>
  )
}

export default TeamBlock