import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = styled.header`
  width: 100%;
  height: 10%;
  background-color: hsl(0, 0%, 100%);
  /* box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px; */
  /* box-shadow: 0px 8px 24px 0 rgba(0, 0, 0, 0.1); */
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
  nav {
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
  }
  h1 {
    font-size: 1rem;
  }
  h3 {
    font-size: 0.7rem;
    font-weight: 300;
  }
  .dark-container {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    cursor: pointer;
  }
  .dark-container:hover {
    & button {
      background-color: hsl(200, 15%, 8%);
      border-radius: 50%;
      cursor: pointer;

      & .icono {
        color: white;
      }
    }
  }
  button {
    padding: 3px 4px;
    border: none;
    background: rgba(255, 255, 255, 0);
    transition: 0.6s;
    cursor: pointer;
  }
  button:hover {
    background-color: hsl(200, 15%, 8%);
    border-radius: 50%;
    cursor: pointer;
    & .icono {
      color: white;
    }
  }

  /*  Media Querys  */
  @media (min-width: 765px) {
    nav {
      justify-content: space-between;
      margin: 0 7rem;
    }
    h1 {
      font-size: 30px;
    }
    h3 {
      font-size: 16px;
    }
  }
`;

function Navbar() {
  return (
    <>
      <Header>
        <nav>
          <h1>Where in the world?</h1>
          <div className="dark-container">
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
