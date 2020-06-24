import React from 'react'
import classes from  './Cartview.css'

const cartview = (props)=>{
    return(
        <React.Fragment>
        


  <div className={classes.product}>

    <div className={classes.product_details}>
      <div className={classes.product_title}><b>{props.title}</b></div>
    </div>
    <div className={classes.product_price}>{props.price}</div>
    <div className={classes.product_quantity}>
    <button className={classes.add_product} onClick={props.addclicked}>
        +
      </button>
    <p>{props.quantity}</p>
       {props.quantity> 1?
      <button className={classes.add_product} onClick={props.removeclicked}>
        -
      </button>   : 
      <button className={classes.add_product_disabled} >
      -
       </button>   }    
    </div>

    <div className={classes.product_removal}>
      <button className={classes.remove_product} onClick={props.deleteclicked}>
        Remove
      </button>
    </div>
    <div className={classes.product_line_price}>{props.total}</div>
  </div>


</React.Fragment>
    )
}

export default cartview
