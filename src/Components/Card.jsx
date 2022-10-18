import React from "react";
import styled from "styled-components";
import { Car } from "../Cover/Cover.elements";

function Card({
  Imagen,
  Pais,
  Population,
  Region,
  Capital,
  details,
  setDetails,
  setCountry,
}) {
  const click = () => {
    setDetails(!details);
    setCountry(Pais);
    console.log(Pais);
  };
  return (
    <>
      <Car onClick={click}>
        <img src={Imagen} alt={Pais} />
        <div className="Container">
          <h2 className="Pais">{Pais}</h2>
          <div className="flex Population">
            <h3 className="Population"> Population: </h3>
            <h4 className="Data"> {Population.toLocaleString()} </h4>
          </div>

          <div className="flex Region">
            <h3 className="Region"> Region: </h3>
            <h4 className="Data"> {Region} </h4>
          </div>

          <div className="flex Capital">
            <h3 className="Capital"> Capital: </h3>
            <h4 className="Data"> {Capital} </h4>
          </div>
        </div>
      </Car>
    </>
  );
}

export default Card;
