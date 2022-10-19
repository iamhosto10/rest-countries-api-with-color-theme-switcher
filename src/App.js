import "./App.css";
import Input from "./Components/Input";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import { useDispatch } from "react-redux";
// import store from "./store";
import { useEffect, useState } from "react";
import Themes from "./Theme/Themes";
import { ThemeProvider } from "styled-components";
import { Main } from "./Cover/Cover.elements";
import DetailCard from "./Components/DetailCard";
import { cambiarSearcherAction } from "./actions/searcherAction";

function App() {
  const [region, setRegion] = useState("");
  const [tema, setTema] = useState("light");
  const [details, setDetails] = useState(false);
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const dis = (nombre) => dispatch(cambiarSearcherAction(nombre));
  useEffect(() => {
    dis("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [details]);

  const actualizarregion = (e) => {
    if (e) {
      setRegion(e.target.value);
    } else {
      setRegion("");
    }
  };
  return (
    // <Provider store={store}>
    <ThemeProvider theme={Themes[tema]}>
      <Navbar tema={tema} setTema={setTema} />
      {details ? (
        <Main>
          <DetailCard
            details={details}
            setDetails={setDetails}
            country={country}
            setCountry={setCountry}
          />
        </Main>
      ) : (
        <Main>
          <Input actualizarregion={actualizarregion} />
          <Cards
            region={region}
            country={country}
            setCountry={setCountry}
            details={details}
            setDetails={setDetails}
          />
        </Main>
      )}
    </ThemeProvider>
    // {/* </Provider> */}
  );
}

export default App;
