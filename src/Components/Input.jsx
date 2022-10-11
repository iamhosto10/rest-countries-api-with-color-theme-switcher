import React, { useRef } from "react";
import { cambiarSearcherAction } from "../actions/searcherAction";
import { useDispatch, useSelector } from "react-redux";
import { In } from "../Cover/Cover.elements";

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
