import { createContext, PropsWithChildren, useState } from "react";
import React from 'react'

export const PopupContext = createContext(null)


function PopupProvider({ children }) {

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);

  return (
    <PopupContext.Provider value={{ isOpen, setIsOpen, currentIndex, setCurrentIndex}}>
      {children}
    </PopupContext.Provider>
  )
}

export default PopupProvider