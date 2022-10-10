import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { obtenerDatos } from "../actions/searcherAction";
import APIRestSearch from "../Functions/APIRestSearch";

const Container = styled.div`
  @media (min-width: 768px) {
    padding: 0 9rem;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
  }
`;
function Cards({ region }) {
  const dispatch = useDispatch();

  const [paises, setPaises] = useState();

  //obetener el state
  const state1 = useSelector((state) => state.search.searcher);
  console.log(state1);

  // useeffect

  useEffect(() => {
    async function API2() {
      try {
        setPaises(await APIRestSearch(state1, region));
      } catch (error) {}
    }
    API2();
  }, [state1, region]);

  return (
    <>
      <Container>
        {paises
          ? paises.map((p) => (
              <Card
                key={p ? p["name"]["common"] : ""}
                Imagen={p ? p["flags"]["png"] : ""}
                Pais={p ? p["name"]["common"] : ""}
                Population={p ? p["population"] : ""}
                Region={p ? p["region"] : ""}
                Capital={p ? p["capital"] : ""}
              />
            ))
          : "no hay paises que coincidan en esa busqueda"}
      </Container>
    </>
  );
}

export default Cards;
