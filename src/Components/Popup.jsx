import React, { useContext } from 'react'
import styled from 'styled-components'
import { BackGroundBlur } from './Menu';
import { PopupContext } from '../Providers/PopupProvider';
import { FaDesktop } from 'react-icons/fa';
import { GoPlus } from "react-icons/go";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { SlScreenDesktop } from "react-icons/sl";

const PopupContainer = styled(BackGroundBlur)`
    color: #ffffff;
    position: absolute;
    bottom: 9dvh;
    left:0;
    height: 82dvh;
    width: 41vw;
    z-index: 4;
    transform: ${({ isOpen }) => (isOpen ? 'none' : 'translateX(-50dvw)')};
    transition: transform 0.3s ease-in-out;

    @media (max-width: 710px) {
      width: 97vw;
      transform: ${({ isOpen }) => (isOpen ? 'none' : 'translateX(-120dvw)')};
      height: 100dvh;
      bottom:0;
    }

    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
`

const PopupCloseButton = styled.div`
  right: 10px;
  width: 36px;
  height: 36px; 
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  cursor: pointer;
  clip-path: inset(7px 0px 7px 0px);
  
  div {
    background-color: #dfdfdf;
    height: 2px;
    width: 100%;

    
    &:nth-child(1) {
      transform: rotate(45deg) translate(0px,2px);
    }
    
    &:nth-child(2) {
      transform: rotate(-45deg) translate(0px,-2px);
    }
  }
  
  &:hover {
    div {
      background-color: #adadad;
    }
  }

`

const PopupContent = styled.div`
  position: absolute;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: stretch;
  width: 93%;
  height: 87%;
  margin-left: 3%;
  margin-top: 7%;
  margin-right: 4%;
  margin-bottom: 6%;
  z-index: 2;

  a{

    font-size: 24px;
    font-weight: 300;

    @media (max-width: 1600px){
        font-size: 18px;
      }

    @media (max-width: 1400px){
        font-size: 16px;
        
      }

    @media (max-width: 600px){
      font-size: 18px;
    }
    @media (max-width: 320px){
        font-size: 16px;
      }
  }

  li{
      font-size: 18px; 

      @media (max-width: 1600px){
        font-size: 16px;
      }

    @media (max-width: 1400px){
        font-size: 14px;
      }

    @media (max-width: 600px){
      font-size: 16px;
    }

    @media (max-width: 320px){
        font-size: 14px;
      }
  }

`
const PopupHeader = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 0;
    a{
      
      font-size: 64px;
      font-weight: 600;

      @media (max-width: 1600px){
        font-size: 48px;
      }

      @media (max-width: 1400px){
        font-size: 36px;
      }

      @media (max-width: 600px){
        font-size: 36px;
      }

      @media (max-width: 320px){
        font-size: 32px;
      }
    }
`

const PopupBody = styled.div`
    width: 67%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-grow:1;
    margin-top: 7%;
    @media (max-width: 1000px){
      width: 100%
    }

`

const PopupList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 1;

`

const PopupFooter = styled.div`

display: flex;
flex-direction: column;
width: 67%;
@media (max-width: 1000px){
      width: 100%
    }


div{
  display: flex;
  align-items: center;
  margin-bottom: 5%;
  @media (max-width: 1400px){
      
          margin-bottom: 20px;
   
      }

    @media (max-width: 600px){

        margin-bottom: 32px;

    }
}
`

const guitarsAmplifier = [
  'Orange Micro Terror',
  'Marshall DSL1 Head',
  'Cort cmv15H',
  'Orange Micro Terror MT20',
  'Marshall DSL1 Head',
  'Cort cmv15H',
]

const popupContentObj = {
  "-1": {
    header: 'Оборудование',
    description: 'У нас есть большой набор этого оборудовния, который закрывает большинство потребностей',
    list: [
      'Это есть',
      'И это есть',
      'Есть даже это',
      'Это, кстати, тоже',
      'Прикинь, и это',
      'Честно, мы сами в шоке, что это у нас есть',
    ]

  },
  "0": {
    header: 'Усилители',
    description: 'У нас есть большой набор усилителей, которые закрывают большинство потребностей',
    list: [
      'Orange Micro Terror',
      'Marshall DSL1 Head',
      'Cort cmv15H',
      'Orange Micro Terror MT20',
      'Marshall DSL1 Head',
      'Cort cmv15H',
    ]
  }
}

function Popup() {

  const { isOpen, setIsOpen, currentIndex } = useContext(PopupContext)

  let currentItem;
  if (currentIndex !== 0)
    currentItem = popupContentObj['-1'];
  else
     currentItem=popupContentObj[currentIndex];

  return (
    <PopupContainer isOpen={isOpen}>
      <PopupContent>
        <PopupHeader>
          <a >{currentItem.header}</a>
          <PopupCloseButton onClick={() => setIsOpen(false)}>
            <div></div>
            <div></div>
          </PopupCloseButton>
        </PopupHeader>
        <PopupBody>
          <a>{currentItem.description}</a>
          <PopupList>
            {
              currentItem.list.map((amp, index) => <li key={index}>{amp}</li>)
            }
          </PopupList>
        </PopupBody>
        <PopupFooter>
          <div>
            <GoPlus style={{ width: '36px', height: '36px' }} />
            <SlScreenDesktop style={{ width: '64px', height: '64px' }} />
          </div>
          <a>Мы можем оснастить студию любыми другими устройствами, нужно лишь сообщить нам об этом.</a>
        </PopupFooter>
      </PopupContent>
    </PopupContainer>
  )
}

export default Popup