import React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import axios from "axios";
import { SET_SELECTED_POKEMON } from "../../redux/actions/pokemon";

const PokemonRow = ({ pokemon, index }) => {
    const dispatch = useDispatch();

    const GetPokemonDetail = (url) => {
        axios.get(url)
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: SET_SELECTED_POKEMON,
                        payload: res.data,
                    })
                }
            })
    }

    return (
        <>
            <tr key={index}>
                <td width='65%'>{pokemon.name}</td>
                <td width='35%' style={{
                    'textAlign': 'center'
                }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => GetPokemonDetail(pokemon.url)}
                    >
                        Info
                    </Button>
                </td>
            </tr>
        </>
    )
}

export default PokemonRow;