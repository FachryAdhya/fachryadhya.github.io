import React from "react";
import { useSelector } from "react-redux";
import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
    const { filter, pokemon } = useSelector(({ filter, pokemon }) => ({
        filter,
        pokemon,
    }));

    return (
        <table style={{
            'width': '100%',
        }}>
            <tbody>
                {pokemon
                    .filter(({ name }) =>
                        name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
                    )
                    .slice(0, 25)
                    .map((pokemon, index) => (
                        <PokemonRow
                            key={index}
                            pokemon={pokemon}
                        />
                    ))}
            </tbody>
        </table>
    );
}

export default PokemonTable;