import React from 'react'
import Popup from "./Popup";
import PopupProvider from "../../Providers/PopupProvider";
import BackgroundContainer from "./BackgroundContainer";


function MainPage() {
    return (
        <PopupProvider>
            <Popup />
            <BackgroundContainer />
        </PopupProvider>
    )
}

export default MainPage