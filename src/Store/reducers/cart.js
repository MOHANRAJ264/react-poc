import * as actionTypes from '../actions/actionTypes.js'
import {updateObject} from '../../shared/utility'

const initialState ={
    cart:null,
    error:null,
    loaded:false,
    carterror:null
}
// const setIngredients = (state,action)=>{
//     return updateObject(state,{ products:action.products})

// }

const initcart=(state,action)=>{
    return updateObject(state,{
        cart:action.cart,
        loaded:true
    })
}       
const initcartfailed=(state,action)=>{
    return updateObject(state,{
        error:action.data,
        loaded:true
    })
}

const carterror=(state,action)=>{
    return updateObject(state,{
        carterror:'something went wrong'
    })
} 
const cartvaluechanged=(state,action)=>{
    return updateObject(state,{
        cart:action.cart
    })
}
const removeitem = (state,action)=>{
return updateObject(state,{
    cart:action.cart
})
}
const reducer =(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.INITIALCART: return  initcart(state,action)
        case actionTypes.INITIALCARTFAILED: return  initcartfailed(state,action)
        case actionTypes.CARTERROR: return  carterror(state,action)
        case actionTypes.CARTVALUECHANGED:return cartvaluechanged(state,action) 
        case actionTypes.REMOVEONEITEMINCART:return removeitem(state,action)
           
        // case actionTypes.FETCH_FETCHPRODUCT_FAILED: return fetchIngredientFail(state,action)

        default: return state

        
    }
}


export default reducer