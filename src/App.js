import "./App.css";
import Input from "./Components/Input";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import { Provider } from "react-redux";
import store from "./store";
import { useState } from "react";
import Themes from "./Theme/Themes";
import { ThemeProvider } from "styled-components";
import { Main } from "./Cover/Cover.elements";

function App() {
  const [region, setRegion] = useState("");
  const [tema, setTema] = useState("light");
  const actualizarregion = (e) => {
    if (e) {
      setRegion(e.target.value);
    } else {
      setRegion("");
    }
  };
  return (
    <Provider store={store}>
      <ThemeProvider theme={Themes[tema]}>
        <Navbar tema={tema} setTema={setTema} />
        <Main>
          <Input actualizarregion={actualizarregion} />
          <Cards region={region} />
        </Main>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
