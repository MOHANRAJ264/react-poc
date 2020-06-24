import axios from 'axios'
import * as actionTypes from './actionTypes'


export const setproducts = (products)=>{
    return {
        type:actionTypes.SET_PRODUCTS,
        products:products
    }
}
export const fetchProductsfailed =()=>{
    return{
        type:actionTypes.FETCH_FETCHPRODUCT_FAILED,
        
    }
}

export const initproducts= ()=>{
    return dispatch => {
        axios.get('/api/product/all')
            .then(response=>{
                dispatch(setproducts(response.data))
        }).catch(error=>{
            dispatch(fetchProductsfailed())

        })
    }
}