import React, { Component } from 'react';
import './App.css';
import {Route,withRouter,Switch,Redirect} from 'react-router-dom'


import Home from './Containers/Home/Home'
import Auth from './Containers/Authenticate/Auth'
import Cart from './Containers/Cart/Cart'
import Orders from './Containers/Orders/Orders'
import Layout from './HOC/Layout/Layout'
import Logout from './Containers/Authenticate/Logout/Logout'
import axios from 'axios'
import {connect} from 'react-redux'
class App extends Component {
  
 
  render() {
    axios.defaults.baseURL = "http://localhost:8080";
    axios.defaults.headers = {Authorization:this.props.token};
    let routes =(
      <Switch>
          <Route path ="/auth" component={Auth}/>
         <Route path ="/" exact component={Home}/>
         <Redirect to='/'/>
       </Switch>
    )
    if(this.props.token!==null){
      routes=(
        <Switch>
          <Route path ="/logout" component={Logout}/>
           <Route path ="/orders" component={Orders}/>
           <Route path ="/cart" component={Cart}/>
           <Route path ="/auth" component={Auth}/> 
           <Route path ="/" exact component={Home}/>
           <Redirect to="/"/>
       </Switch>
      )
    }
    return (
      <div className="App">
       
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    token:state.auth.token
  }
}


export default connect(mapStateToProps,null)(withRouter(App));
