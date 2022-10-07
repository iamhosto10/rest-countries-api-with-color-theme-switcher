import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import APIRest from "../Functions/APIRest";

const Container = styled.div`
  @media (min-width: 768px) {
    padding: 0 9rem;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
  }
`;
function Cards() {
  const [paises, setPaises] = useState();
  useEffect(() => {
    async function API() {
      setPaises(await APIRest());
    }
    API();
  }, []);

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
          : null}
        ;
      </Container>
    </>
  );
}

export default Cards;
