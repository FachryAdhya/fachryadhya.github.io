import React from "react";

import styled from "@emotion/styled";

import { useSelector, useDispatch } from "react-redux";

import PokemonInfo from "./components/Pokemon/PokemonInfo";
import PokemonFilter from "./components/Pokemon/PokemonFilter";
import PokemonTable from "./components/Pokemon/PokemonTable";

import "./App.css";

import ENDPOINT from "./api/endpoint";

import { SET_POKEMON } from "./redux/actions/pokemon";

const Title = styled.h1`
  text-align: center;
`;

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 1rem;
`;

const TableDiv = styled.div`
  margin-top: 1rem;
  height: 65vh;
  overflow-y: scroll;
`;

const InfoDiv = styled.div`
  margin-left: 2rem;
`;

function App() {

  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemon);

  React.useEffect(() => {
    fetch(ENDPOINT.GET_POKEMON)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: SET_POKEMON,
          payload: data.results,
        })
      })
  }, [dispatch]);

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <PageContainer>
      <Title>Pokemon API</Title>
      <PokemonFilter />
      <TwoColumnLayout>
        <TableDiv>
          <PokemonTable />
        </TableDiv>
        <InfoDiv>
          <PokemonInfo />
        </InfoDiv>
      </TwoColumnLayout>
    </PageContainer>
  );
}

export default App