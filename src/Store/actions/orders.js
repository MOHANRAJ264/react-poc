import axios from 'axios'
import * as actionTypes from './actionTypes'


export const setorders = (data)=>{
    let cominearray=[]
    for(let i=0;i<data.length;i++){
        cominearray.push(...data[i].order)
    }
    return {
        type:actionTypes.INITORDERS,
        orders:cominearray
    }
}
export const fetchordersfailed =()=>{
    return{
        type:actionTypes.ORDERFAIL,
        error:'something went wrong'
        
    }
}

export const initorders= ()=>{
    return dispatch => {
        axios.get('/api/users/my-order')
            .then(response=>{
                dispatch(setorders(response.data))
        }).catch(error=>{
            dispatch(fetchordersfailed())

        })
    }
}

export const neworder= ()=>{
    return dispatch => {
        axios.post('/api/users/add-order')
            .then(response=>{
               dispatch(initorders())
        }).catch(error=>{
            dispatch(fetchordersfailed())

        })
    }
}