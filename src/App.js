import styled from "styled-components";
import BackgroundContainer from "./Components/BackgroundContainer";
import logo from "./img/logoWhite.png"

const Logo=styled.img`
    width: 100px;
    position: absolute;
    z-index: 1;
    padding: 0.5%
`

function App() {

  return (
    <div className="App">
      <Logo src={logo}></Logo>
      <BackgroundContainer />
    </div>
  );

}

export default App;
