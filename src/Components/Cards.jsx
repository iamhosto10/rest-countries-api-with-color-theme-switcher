import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div``;
function Cards() {
  return (
    <>
      <Container>
        <Card
          Pais=" Colombia"
          Population="100000"
          Region="America"
          Capital="Bogota"
        />
      </Container>
    </>
  );
}

export default Cards;
