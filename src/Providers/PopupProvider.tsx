import { createContext, PropsWithChildren, useState } from "react";
import React from 'react'

//Знаечения контекста попапа
interface PopupValue{
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  currentIndex: number,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
}

type PopupContextType=PopupValue | null;

export const PopupContext = createContext<PopupContextType>(null)


function PopupProvider({ children }: PropsWithChildren) {

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);

  return (
    <PopupContext.Provider value={{ isOpen, setIsOpen, currentIndex, setCurrentIndex}}>
      {children}
    </PopupContext.Provider>
  )
}

export default PopupProvider