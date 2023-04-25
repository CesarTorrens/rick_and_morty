import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './types'
import axios from 'axios'

export const addFav = (character) => {
    return async (dispatch) => {
        try {
            const endpoint = 'http://localhost:3001/rickandmorty/fav';
            const { data } = await axios.post(endpoint, character)
            return dispatch({ type: ADD_FAV, payload: data });        
        } catch (error) {
            throw new Error(error.message)
        }
    }
}
export const removeFav = (id) => {
    return async (dispatch) => {
        try {
            const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
            const { data } = await  axios.delete(endpoint)
            return dispatch({ type: REMOVE_FAV, payload: data })
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender }
}

export const orderCards = (orden) => {
    return { type: ORDER, payload: orden }
}