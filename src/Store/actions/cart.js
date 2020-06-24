import axios from 'axios'
import * as actionTypes from './actionTypes'


export const initialcart = ()=>{
   return dispatch =>{axios.get('/api/users/mycart').then(response=>{
       dispatch(cartsuccess(response.data))
   }).catch(error=>{
       dispatch(cartfailed(error))
   })
 }
}
export const cartsuccess=(data)=>{
    return{
        type:actionTypes.INITIALCART,
        cart:data
        
    }
}
export const cartfailed=(data)=>{
    return{
        type:actionTypes.INITIALCARTFAILED,
        error:"something went wrong"
    }
}

export const cartvaluechanged = (prodid,quantity)=>{
    return dispatch =>{axios.patch('/api/users/addcart',{
    prodid:prodid,
    quantity:quantity
    }).then(response=>{
        dispatch(initialcart())
    }).catch(error=>{
        dispatch(cartfailed(error))
    })
  }
 }

export const removeitem = (prodid)=>{
    return dispatch =>{axios.patch('/api/users/removecart',{
    _id:prodid,
    }).then(response=>{
        dispatch(initialcart())
    }).catch(error=>{
        dispatch(cartfailed(error))
    })
  }
 }
