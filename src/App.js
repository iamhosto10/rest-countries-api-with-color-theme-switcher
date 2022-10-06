import "./App.css";
import Input from "./Components/Input";
import Navbar from "./Components/Navbar";
import styled from "styled-components";
import Cards from "./Components/Cards";

const Main = styled.main`
  /* padding: 50px 8vw 0 8vw; */

  /* box-shadow: 0 -2px 1px gray; */
`;

function App() {
  return (
    <>
      <Navbar />
      <Main>
        <Input />
        <Cards />
      </Main>
    </>
  );
}

export default App;
