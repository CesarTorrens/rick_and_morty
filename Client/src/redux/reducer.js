import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './types'


const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV: return {
            ...state,
            allCharacters:  payload,
            myFavorites: payload,
        }
        case REMOVE_FAV: 
            return {
                ...state,
                allCharacters: payload,
                myFavorites: payload
            }
        case FILTER:
            if(payload === 'Todos') {
                return {
                    ...state,
                myFavorites: state.allCharacters
                }
            }
        const favFilter = state.allCharacters.filter((character) => character.gender === payload)
            return {
                ...state,
                myFavorites: favFilter
            }
        case ORDER:
            const orderCharacters = state.allCharacters.sort((a, b) => {
                if (payload === "A") return a.id - b.id
                else if (payload === "D") return b.id - a.id
            })
            return {
                ...state,
                myFavorites: orderCharacters
            }
        default: return { ...state }
    }
}

export default reducer