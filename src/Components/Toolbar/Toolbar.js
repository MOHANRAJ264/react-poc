import React from 'react'
import {Navbar , Nav} from 'react-bootstrap';
import classesstylestyle from './Toolbar.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'


const toolbar = (props)=>{
 
    return(
        <Navbar bg="dark" variant="dark" className={classesstylestyle.Desktoponly}>  
    <Navbar.Brand >e-BUY</Navbar.Brand>
    <Nav className="mr-auto">
      {props.token!=null?

      <div>
      <NavLink to="/" style={{color:"white",padding:"10px"}}>Home</NavLink>
      <NavLink to="/cart" style={{color:"white",padding:"10px"}}>Cart</NavLink>
      <NavLink to="/orders" style={{color:"white",padding:"10px"}}>Orders</NavLink>
      <NavLink to="/logout" style={{color:"white",padding:"10px"}}>Logout</NavLink></div>
      :
      <div>
      <NavLink to="/" style={{color:"white",padding:"10px"}}>Home</NavLink>
      <NavLink to="/auth" style={{color:"white",padding:"10px"}}>Login</NavLink> 
      </div>}
    </Nav>
  </Navbar>
    )
}
const mapStateToProps=state=>{
  return{
    token:state.auth.token
  }
}
export default connect(mapStateToProps,null)(toolbar)