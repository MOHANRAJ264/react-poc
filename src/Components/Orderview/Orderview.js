import React from 'react'
import classes from  './Orderview.css'

const orderview = (props)=>{
    return(
        <React.Fragment>
        


  <div className={classes.product}>

    <div className={classes.product_details}>
      <div className={classes.product_title}><b>{props.title}</b></div>
    </div>
    <div className={classes.product_price}>{props.price}</div>
    <div className={classes.product_quantity}>
    
    <p>{props.quantity}</p>
         
    </div>

    <div className={classes.product_removal}>
      <p className={classes.status} >
        Placed
      </p>
    </div>
    <div className={classes.product_line_price}>{props.total}</div>
  </div>


</React.Fragment>
    )
}

export default orderview
