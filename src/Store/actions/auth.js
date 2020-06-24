import axios from 'axios'
import * as actionTypes from './actionTypes'

export const loginsuccess = (details)=>{
    return {
        type:actionTypes.LOGINUSER,
        token:details.token,
       userdata:details.user,
       error:null,
    }
}
export const loginfailed =(error)=>{
    return{
        type:actionTypes.LOGINFAILED,
        message:"INVALID CREDENTIALS"
        
    }
}
export const signinfailed =(error)=>{
    return{
        type:actionTypes.LOGINFAILED,
        message:'INVALID CREDENTIALS'
        
    }
}
export const emailchange = (data)=>{
    return {
        type:actionTypes.EMAILCHANGE,
        email:data
        }
}
export const passwordchange = (data)=>{
    return {
        type:actionTypes.PASSWORDCHANGE,
        password:data
    }
}
export const namechange = (data)=>{
    return {
        type:actionTypes.NAMECHANGE,
        name:data
    }
}
export const agechange = (data)=>{
    return {
        type:actionTypes.AGECHANGE,
        age:data
    }
}
export const genderchange = (data)=>{
    return {
        type:actionTypes.GENDERCHANGE,
        gender:data
    }
}
export const streetchange = (data)=>{
    return {
        type:actionTypes.STREETCHANGE,
        street:data
    }
}
export const citychange = (data)=>{
    return {
        type:actionTypes.CITYCHANGE,
        city:data
    }
}
export const statechange = (data)=>{
    return {
        type:actionTypes.STATECHANGE,
        state:data
    }
}
export const zipchange = (data)=>{
    return {
        type:actionTypes.ZIPCHANGE,
        zip:data
    }
}



export const signinuser=(event,data)=>{
    return dispatch=>{
        event.preventDefault()
        axios.post('/api/users/signup',{
            name:data.name,
            email:data.email,
            password:data.password,
            age:data.age,
            gender:data.gender,
            street:data.street,
            city:data.city,
            zip:data.zip,
            state:data.state
        }).then(response => {
            localStorage.setItem('email',response.data.user.email)
       localStorage.setItem('password',data.password)
            dispatch(loginsuccess(response.data))
        }).catch(error=>{
            dispatch(signinfailed(error))
            
    })
}
}
export const loginuser= (event,data)=>{
    return dispatch => {
        event.preventDefault() 
        axios.post('/api/users/login',{
        
            email:data.email,
            password:data.password
    
        })
            .then(response=>{
       localStorage.setItem('email',response.data.user.email)
       localStorage.setItem('password',data.password)
              
                dispatch(loginsuccess(response.data))
        }).catch(error=>{
            dispatch(loginfailed(error))

        })
    }
}

export const logoutsucess=()=>{
    return{
        type:actionTypes.LOGOUTUSER
    }

}
export const logoutfailed=(error)=>{
    return{
        type:actionTypes.LOGOUTFAILED,
        message:'logout failed'
    }
}
const tryautologin =(email,password)=>{
    return dispatch => {
        axios.post('/api/users/login',{
        
            email:email,
            password:password
    
        })
            .then(response=>{
              dispatch(loginsuccess(response.data))
        }).catch(error=>{
            dispatch(loginfailed(error))

        })
    }
}
export const autosignin=()=>{
    return dispatch =>{
        const email=localStorage.getItem('email')
        const password=localStorage.getItem('password')
        if(email){
            dispatch(tryautologin(email,password))
        }
        
    }
}
export const logoutuser = (data)=>{
     localStorage.removeItem('email')
     localStorage.removeItem('password')  
    return dispatch =>{axios.post('/api/users/logout-all-device').then(response=>{
        dispatch(logoutsucess(response.data))
    }).catch(error=>{
        dispatch(logoutfailed(error))
    })
        
        }
        
    
}