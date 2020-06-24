import * as actionTypes from '../actions/actionTypes.js'
import {updateObject} from '../../shared/utility'

const initialState ={
    products:null,
    error:false,
}
const setIngredients = (state,action)=>{
    return updateObject(state,{ products:action.products})

}

const fetchIngredientFail =(state,action)=>{
    return updateObject(state,{error:true})
}
const reducer =(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.SET_PRODUCTS: return  setIngredients(state,action)
           
        case actionTypes.FETCH_FETCHPRODUCT_FAILED: return fetchIngredientFail(state,action)

        default: return state

        
    }
}


export default reducer