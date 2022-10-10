import React, { useRef } from "react";
import styled from "styled-components";
import { cambiarSearcherAction } from "../actions/searcherAction";
import { useDispatch, useSelector } from "react-redux";

const In = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 45px 0 30px;
  input {
    width: 85%;
    padding: 15px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  input:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
  select {
    width: 40%;
    padding: 10px;
    align-self: flex-start;
    margin-left: 7.5%;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  select:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
  /*  Media Querys  */
  @media (min-width: 765px) {
    flex-direction: row;
    justify-content: space-around;
    input {
      width: 40%;
    }
    select {
      width: 20%;
    }
  }
`;
function Input({ actualizarregion }) {
  //referencia input
  const insearch = useRef(null);
  //referencia select
  const sele = useRef(null);
  // utilizar usedispatch y te crea una funcion
  const dispatch = useDispatch();
  // mando a llamar la funcion desde dispatch
  const actualizarFlags = (nombre) => dispatch(cambiarSearcherAction(nombre));
  //actualizo las banderas cada vez que escribo algo en el input
  const actualizar = (e) => {
    e.preventDefault();
    actualizarFlags(e.target.value);
    sele.current.value = "";
    actualizarregion();
  };
  const actualizarreg = (e) => {
    actualizarregion(e);
    if (e.target.value !== "") {
      insearch.current.value = "";
      actualizarFlags("");
    }
  };

  return (
    <>
      <In>
        <input
          ref={insearch}
          type="search"
          placeholder="  🔍   Search for a country...  "
          onChange={actualizar}
        />
        <select
          ref={sele}
          name="Filter by Region"
          aria-label="Filter by Region"
          onChange={(e) => actualizarreg(e)}
        >
          <option className="zero" value="">
            Filter by Region
          </option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </In>
    </>
  );
}

export default Input;
