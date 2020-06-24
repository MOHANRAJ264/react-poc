import React, { Component } from 'react'
import {connect} from 'react-redux'
import Orderview from '../../Components/Orderview/Orderview'
import Button from '@material-ui/core/Button';
import HouseIcon from '@material-ui/icons/House';
import {NavLink} from 'react-router-dom'
import * as actions from '../../Store/actions/index'
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler'
import axios from 'axios'




class orders extends Component{
   
    componentDidMount(){
        this.props.onCartValueChange()
    }
    
    render(){
        let order =(<div style={{textAlign:"center"}}>
             <h2>OOPS!</h2>
            <h4>You have no orders</h4>
            <NavLink to="/" style={{textDecoration:"none"}}> 
            <Button  variant="contained" color="secondary" size="small"startIcon={<HouseIcon />}>
             Click To Shop More
            </Button>
            </NavLink>
        </div>)
        
        if(this.props.orders!==null  && this.props.orders.length > 0 ){
             order=this.props.orders.map(order=>{
             return <Orderview
             key={order._id} 
             title={order.name} 
             price={order.price}
             total={order.total}
             quantity={order.quantity}
             />
         })
        }
        
        return(
           <React.Fragment>
               {order}
           </React.Fragment>
        )
    }
}
const mapStateToProps = state =>{
    return{
      orders:state.order.orders
    }
}
const mapDispatchToProps = dispatch =>{
    return{
       onCartValueChange:(prodid,quantity)=>dispatch(actions.initorders())
             

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(orders,axios))