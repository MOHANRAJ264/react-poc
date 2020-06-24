import * as actionTypes from '../actions/actionTypes.js'
import {updateObject} from '../../shared/utility'

const initialState ={
    orders:null,
    error:false,
}
const setorders = (state,action)=>{
    return updateObject(state,{
        orders:action.orders
    })
}
const orderfail = (state,action)=>{
    return updateObject(state,{
        error:action.error
    })
}
const reducer =(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.INITORDERS: return  setorders(state,action)
        case actionTypes.ORDERFAIL: return  orderfail(state,action)
        case actionTypes.NEWORDER: return  setorders(state,action)
           

        default: return state

        
    }
}


export default reducer