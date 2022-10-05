import "./App.css";
import Input from "./Components/Input";
import Navbar from "./Components/Navbar";
import styled from "styled-components";

const Main = styled.main`
  /* padding: 50px 8vw 0 8vw; */
  background-color: hsl(0, 0%, 98%);

  /* box-shadow: 0 -2px 1px gray; */
`;

function App() {
  return (
    <>
      <Navbar />
      <Main>
        <Input />
      </Main>
    </>
  );
}

export default App;
