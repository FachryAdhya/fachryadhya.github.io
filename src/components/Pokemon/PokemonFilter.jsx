import React from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { SET_POKEMON_FILTER, SET_SELECTED_POKEMON } from "../../redux/actions/pokemon";
import { Button, createTheme, ThemeProvider } from "@mui/material";

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
  margin-right: 1rem;
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;

const { palette } = createTheme()
const { augmentColor } = palette
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } })
const theme = createTheme({
    palette: {
        lightgrey: createColor('#E6E6E6')
    }
})

const PokemonFilter = () => {
    const filter = useSelector(({ filter }) => filter);
    const dispatch = useDispatch();

    function clearFilter() {
        dispatch({
            type: SET_POKEMON_FILTER,
            payload: "",
        })
        dispatch({
            type: SET_SELECTED_POKEMON,
            payload: null,
        })
    }

    return (
        <>
            <TwoColumn>
                <Input
                    type="text"
                    value={filter}
                    placeholder="Pokemon name"
                    onChange={(evt) =>
                        dispatch({
                            type: SET_POKEMON_FILTER,
                            payload: evt.target.value,
                        })
                    }
                />
                <ThemeProvider theme={theme}>
                    <Button
                        variant="contained"
                        color="lightgrey"
                        size="medium"
                        fullWidth
                        onClick={() => clearFilter()}
                    >
                        Clear
                    </Button>
                </ThemeProvider>
            </TwoColumn>
        </>
    );
};

export default PokemonFilter;