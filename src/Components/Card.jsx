import React from "react";
import styled from "styled-components";

const Car = styled.article`
  width: 270px;
  min-width: 270px;
  /* border: 0.2px solid black; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 7px;
  margin: 3rem auto;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
  }
  .Container {
    padding: 1rem;
  }
  .flex {
    display: flex;
    gap: 1rem;
  }
  img {
    width: 270px;
    height: 180px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  h2 {
    margin: 1rem 0;
    font-size: 19px;
  }
`;
function Card({ Imagen, Pais, Population, Region, Capital }) {
  return (
    <>
      <Car>
        <img src={Imagen} alt={Pais} />
        <div className="Container">
          <h2 className="Pais">{Pais}</h2>
          <div className="flex Population">
            <h3 className="Population"> Population </h3>
            <h4 className="Data"> {Population} </h4>
          </div>

          <div className="flex Region">
            <h3 className="Region"> Region </h3>
            <h4 className="Data"> {Region} </h4>
          </div>

          <div className="flex Capital">
            <h3 className="Capital"> Capital </h3>
            <h4 className="Data"> {Capital} </h4>
          </div>
        </div>
      </Car>
    </>
  );
}

export default Card;
