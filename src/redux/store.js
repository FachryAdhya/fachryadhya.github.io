import { legacy_createStore as createStore } from "redux"
import pokemonReducer from "./reducers/pokemon"

export default createStore(pokemonReducer)