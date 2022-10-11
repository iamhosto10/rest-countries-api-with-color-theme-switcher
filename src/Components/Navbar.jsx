import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../Cover/Cover.elements";

function Navbar({ tema, setTema }) {
  const changeTema = () => {
    setTema(tema === "light" ? "dark" : "light");
  };
  return (
    <>
      <Header>
        <nav>
          <h1>Where in the world?</h1>
          <div className="dark-container" onClick={changeTema}>
            <button>
              <FontAwesomeIcon className="icono" icon={faMoon} />
            </button>
            <h3>Dark Mode</h3>
          </div>
        </nav>
      </Header>
    </>
  );
}

export default Navbar;
