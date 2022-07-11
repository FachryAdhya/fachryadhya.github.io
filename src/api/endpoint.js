const BASE_URL = "https://pokeapi.co/api/v2";

const ENDPOINT = {
    // GET_POKEMON: `/pokemon.json`,
    GET_POKEMON: `${BASE_URL}/pokemon?limit=100000&offset=0`,
}

export default ENDPOINT;