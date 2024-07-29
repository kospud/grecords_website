import BackgroundContainer from "./Components/BackgroundContainer";
import NavBar from "./Components/NavBar";
import Popup from "./Components/Popup";
import PopupProvider from "./Providers/PopupProvider";



function App() {
  return (
    <div classname="App">
      <NavBar />
      <PopupProvider>
        <Popup />
        <BackgroundContainer />
      </PopupProvider>
    </div>
  );

}

export default App;
