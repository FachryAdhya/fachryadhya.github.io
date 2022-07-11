import { SET_POKEMON, SET_POKEMON_FILTER, SET_SELECTED_POKEMON } from "../actions/pokemon"

const initialState = {
    pokemon: [],
    filter: "",
    selectedPokemon: null,
}

function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case SET_POKEMON:
            console.log('SET_POKEMON')
            return {
                ...state,
                pokemon: action.payload,
            };
        case SET_POKEMON_FILTER:
            console.log('SET_POKEMON_FILTER')
            return {
                ...state,
                filter: action.payload,
            };
        case SET_SELECTED_POKEMON:
            console.log('SET_SELECTED_POKEMON')
            return {
                ...state,
                selectedPokemon: action.payload,
            };
        default:
            return state
    }
}

export default pokemonReducer