import * as actionTypes from '../actions/actionTypes.js'
import {updateObject} from '../../shared/utility'

const initialState ={
    token:null,
    email:null,
    password:null,
    error:null,
    name:null,
    age:null,
    gender:null,
    street:null,
    city:null,
    state:null,
    zip:null,

    userdata:null
    

}
const logout=(state,action)=>{
    return updateObject(state,{
        token:null,
    email:null,
    password:null,
    error:null,
    name:null,
    age:null,
    gender:null,
    street:null,
    city:null,
    state:null,
    zip:null,

    userdata:null,
    })
}
const loginuser = (state,action)=>{
    return updateObject(state,{ 
        token:action.token,
        userdata:action.userdata,
        error:action.error
       })
}
const signinuser = (state,action)=>{
    return updateObject(state,{ 
        token:action.token,
        userdata:action.userdata,
        error:action.error
       })
}
const loginfail=(state,action)=>{
    return updateObject(state,{
        error:action.message
    })
}
const logoutfailed=(state,action)=>{
    return updateObject(state,{
        error:action.message
    })
}
const emailchanged=(state,action)=>{
    return updateObject(state,{
        email:action.email
    })
}
const passwordchanged=(state,action)=>{
    return updateObject(state,{
        password:action.password
    })
}
const namechanged=(state,action)=>{
    return updateObject(state,{
        name:action.name
    })
}
const genderchanged=(state,action)=>{
    return updateObject(state,{
        gender:action.gender
    })
}
const agechanged=(state,action)=>{
    return updateObject(state,{
        age:action.age
    })
}
const streetchanged=(state,action)=>{
    return updateObject(state,{
        street:action.street
    })
}
const citychanged=(state,action)=>{
    return updateObject(state,{
        city:action.city
    })
}
const zipchanged=(state,action)=>{
    return updateObject(state,{
        zip:action.zip
    })
}
const statechanged=(state,action)=>{
    return updateObject(state,{
        state:action.state
    })
}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.LOGINUSER: return  loginuser(state,action)

        case actionTypes.SIGNINUSER:return signinuser(state,action)

        case actionTypes.LOGINFAILED: return  loginfail(state,action)
           
        case actionTypes.EMAILCHANGE:return emailchanged(state,action)

        case actionTypes.PASSWORDCHANGE:return passwordchanged(state,action)
        case actionTypes.NAMECHANGE:return namechanged(state,action)
        case actionTypes.AGECHANGE:return agechanged(state,action)
        case actionTypes.GENDERCHANGE:return genderchanged(state,action)
        case actionTypes.STREETCHANGE:return streetchanged(state,action)
        case actionTypes.CITYCHANGE:return citychanged(state,action)
        case actionTypes.ZIPCHANGE:return zipchanged(state,action)
        case actionTypes.STATECHANGE:return statechanged(state,action)

        case actionTypes.LOGOUTUSER:return logout(state,action)
        case actionTypes.LOGOUTFAILED:return logoutfailed(state,action)



        default: return state

        
    }
}


export default reducer