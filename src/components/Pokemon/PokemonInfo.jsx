import { InputLabel } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 1rem;
`;

const PokemonInfo = () => {
    const selectedPokemon = useSelector(({ selectedPokemon }) => selectedPokemon);

    console.log(selectedPokemon)

    return selectedPokemon ? (
        <>
            <h2>{selectedPokemon.name}</h2>
            <TwoColumnLayout>
                <div>
                    <img src={selectedPokemon.sprites.other.dream_world.front_default ?? '/default.png'} alt="poke-img" style={{
                        'width': '10em',
                        'height': '7rem'
                    }} />
                    <InputLabel style={{
                        'marginTop': '.75rem',
                        'whiteSpace': 'break-spaces'
                    }}>
                        {selectedPokemon.abilities.map((item) => {
                            return item.ability.name;
                        }).join(", ")}
                    </InputLabel>
                </div>
                <div>
                    <table style={{
                        'width': '100%',
                    }}>
                        <tbody>
                            {selectedPokemon.stats.map((stats, index) => (
                                <tr key={index}>
                                    <td>{stats.stat.name}</td>
                                    <td>{stats.base_stat}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </TwoColumnLayout>
        </>
    ) : null;
};

export default PokemonInfo;