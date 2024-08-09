import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Noise from "./Components/Noise";






function App() {
  return (
    <div classname="App" >
      <Noise />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
