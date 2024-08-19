import React from 'react'
import Popup from "./Popup";
import PopupProvider from "../../Providers/PopupProvider";
import BackgroundContainer from "./BackgroundContainer";
import NavBar from '../NavBar/NavBar';


function MainPage() {
    return (
        <PopupProvider>
            <NavBar />
            <Popup />
            <BackgroundContainer />
        </PopupProvider>
    )
}

export default MainPage