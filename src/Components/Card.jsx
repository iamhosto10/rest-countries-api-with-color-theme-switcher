import React from "react";
import styled from "styled-components";

const Car = styled.article`
  width: 80%;
  border: 0.2px solid black;
  border-radius: 7px;
  .Container {
    padding: 1rem;
  }
  .flex {
    display: flex;
    gap: 1rem;
  }
  h2 {
    margin: 1rem 0;
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
