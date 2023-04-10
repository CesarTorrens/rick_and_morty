import { ADD_FAV, REMOVE_FAV } from './types'


const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV: return {
            ...state,
            myFavorites:  [...state.myFavorites, payload]
        }
        case REMOVE_FAV: 
            const favFilter = state.myFavorites.filter((character) => character.id !== payload)
            return {
                ...state,
                myFavorites: favFilter
            }
        default: return { ...state }
    }
}

export default reducer