import React, { Component } from 'react'
import {connect} from 'react-redux'
import Spinner from '../../../Components/Spinner/Spinner'
import * as actions from '../../../Store/actions/index'
import {Redirect} from 'react-router-dom'

class Layout extends Component{
    state={
        loged:false
    }
    componentDidMount(){
        this.props.onLogout()
        this.setState({loged:true})
    }
render(){
    let display=<Spinner/>
    if(this.state.loged){
        display=<Redirect to="/"/>
    }
   
    return(
        <React.Fragment>
            {display}
        </React.Fragment>
    )
}
}


const mapDispatchToProps = dispatch =>{
    return{
        onLogout:()=>dispatch(actions.logoutuser()),
    }
}
export default connect(null,mapDispatchToProps)(Layout)