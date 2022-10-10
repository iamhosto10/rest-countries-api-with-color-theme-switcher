import "./App.css";
import Input from "./Components/Input";
import Navbar from "./Components/Navbar";
import styled from "styled-components";
import Cards from "./Components/Cards";
import { Provider } from "react-redux";
import store from "./store";
import { useState } from "react";

const Main = styled.main`
  /* padding: 50px 8vw 0 8vw; */

  /* box-shadow: 0 -2px 1px gray; */
`;

function App() {
  const [region, setRegion] = useState("");
  const actualizarregion = (e) => {
    if (e) {
      setRegion(e.target.value);
    } else {
      setRegion("");
    }
  };
  return (
    <Provider store={store}>
      <Navbar />
      <Main>
        <Input actualizarregion={actualizarregion} />
        <Cards region={region} />
      </Main>
    </Provider>
  );
}

export default App;
