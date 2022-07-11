import React from "react";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { SET_POKEMON } from "../../redux/actions/pokemon";

function PokemonPaging() {
    const dispatch = useDispatch();
    const { next, prev } = useSelector(({ next, prev }) => ({
        next,
        prev,
    }));

    function nextPage() {
        fetch(next)
            .then((resp) => resp.json())
            .then((data) => {
                console.log('Next')
                dispatch({
                    type: SET_POKEMON,
                    payload: data.results,
                    next: data.next,
                    prev: data.previous
                })
            })
    }

    function previousPage() {
        fetch(prev)
            .then((resp) => resp.json())
            .then((data) => {
                console.log('Prev')
                dispatch({
                    type: SET_POKEMON,
                    payload: data.results,
                    next: data.next,
                    prev: data.previous
                })
            })
    }

    return (
        <>
            <div style={{
                'marginTop': '1rem',
                'display': 'grid',
                'gridGap': '1rem',
                'gridTemplateColumns': 'repeat(2,7.5rem)'
            }}>
                {
                    !prev ?
                        <Button
                            variant="contained"
                            color="primary"
                            disabled
                        >
                            Prev
                        </Button>
                        :
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => previousPage()}
                        >
                            Prev
                        </Button>
                }
                {
                    !next ?
                        <Button
                            variant="contained"
                            color="primary"
                            disabled
                        >
                            Next
                        </Button>
                        :
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => nextPage()}
                        >
                            Next
                        </Button>
                }
            </div>
        </>
    )
}


export default PokemonPaging;