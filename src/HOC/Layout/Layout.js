import React, { Component } from 'react'
import Toolbar from '../../Components/Toolbar/Toolbar'
import Sidedrawer from '../../Components/Sidedrawer/Sidedrawer'
import {connect} from 'react-redux';
import classes from './Layout.css'

class Layout extends Component{
   
   
    render(){
        return(
            <React.Fragment>
            <Toolbar isAuth/>
            <Sidedrawer isAuth/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
         </React.Fragment>
        )
    }
}
    

//  const mapStateToProps = state =>{
//      return{
//      isAuthenticated:state.auth.token !== null
//      }
//  }   


export default connect(null,null)(Layout)