import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Noise from "./Components/Noise";
import { PageScrollContainer } from "./Components/PageSmoothScrollContainer";
import Gradient from "./Components/Gradient";
import GradientProvider from "./Providers/GradientProvider";
import NavBar from "./Components/NavBar/NavBar";





function App() {
  return (
    <GradientProvider>
      <Noise />
      <Gradient />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </GradientProvider>

  );
}

export default App;
