import React, { Component } from 'react'
import {connect} from 'react-redux'
import Spinner from '../../Components/Spinner/Spinner'
import Cartview from '../../Components/Cartview/Cartview'
import Button from '@material-ui/core/Button';
import HouseIcon from '@material-ui/icons/House';
import {NavLink} from 'react-router-dom'
import classes from '../../Components/Cartview/Cartview.css'
import * as actions from '../../Store/actions/index'
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler'
import axios from 'axios'




class Cart extends Component{
   
    
    componentDidMount(){
        this.props.onInitialCart()
    }
    deleteclickhandler(cart){
        this.props.onRemoveitemchange(cart.product_id)

    }
    addclickHandler =(cart)=>{
        this.props.onCartValueChange(cart.product_id,1)
    }
    removeclickHandler =(cart)=>{
        this.props.onCartValueChange(cart.product_id,-1)
    }
    orderclickHandler=()=>{
        this.props.onNewOrder()
        this.props.history.push('/orders')

    }
    render(){
        let prod =(<div style={{textAlign:"center"}}>
        <h2>OOPS!</h2>
        <h4>You have no items in cart</h4>
       <NavLink to="/" style={{textDecoration:"none"}}> 
       <Button  variant="contained" color="secondary" size="small"startIcon={<HouseIcon />}>
        Click To Shop More
      </Button>
      </NavLink>
     </div>)
    let grandtotal=0
        if(this.props.cart!==null  && this.props.cart.length > 0 ){
             prod=this.props.cart.map(cart=>{
                
              grandtotal=grandtotal+cart.total   
             return <Cartview
             key={cart._id} 
             title={cart.name} 
             price={cart.price}
             total={cart.total}
             quantity={cart.quantity}
             productid={cart.product_id}
             addclicked={()=>this.addclickHandler(cart)}
             removeclicked={()=>this.removeclickHandler(cart)}
             deleteclicked={()=>this.deleteclickhandler(cart)}
             />
         })
        }
        let totaldisplay =<div></div>
        if(this.props.cart!==null && this.props.cart.length>0){
            totaldisplay=(
                <div>
                <div className={classes.totals}>
                  <div className={classes.totals_item}>
                  <label>Grand Total</label>
            <div className={classes.totals_value}>{grandtotal}</div>
                 </div>
               </div>  
               <button className={classes.checkout} onClick={()=>this.orderclickHandler()}>PLACE ORDER</button>
               </div>
            
            )
        }

        
        return(
           <React.Fragment>
                <div>

               
        {this.props.loaded ? <div>{prod}{totaldisplay}</div>:<Spinner/>}
                </div>
              
           </React.Fragment>
        )
    }
}
const mapStateToProps = state =>{
    return{
        cart:state.cart.cart,
        loaded:state.cart.loaded
    }
}
const mapDispatchToProps = dispatch =>{
    return{
       onInitialCart:()=>dispatch(actions.initialcart()),
       onCartValueChange:(prodid,quantity)=>dispatch(actions.cartvaluechanged(prodid,quantity)),
       onRemoveitemchange:(prodid)=>dispatch(actions.removeitem(prodid)),
       onNewOrder:()=>dispatch(actions.neworder())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Cart,axios))