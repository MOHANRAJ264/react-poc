import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import Signin from '../../Components/Signin/Signin'
import Signup from '../../Components/Signup/Signup'
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler'
import axios from 'axios'



class Auth extends Component{
    state={
        in:true
    }
    pageChangeHandler=()=>{
        this.setState( {in : !this.state.in})
    }
    render(){

        let authenticate= this.state.in ? <Signin changed={this.pageChangeHandler}/>:<Signup changed={this.pageChangeHandler}/>
        return(
            <React.Fragment>
              {this.props.token==null? <div>{authenticate}</div>:<Redirect to="/"/>}
            </React.Fragment>
        )
    }
}

const mapStatetoProps = state =>{
    return{
        token:state.auth.token,
        email:state.auth.email,
        password:state.auth.password,
    }
}

export default connect(mapStatetoProps,null)(withErrorHandler(Auth,axios))