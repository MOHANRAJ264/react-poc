import React from 'react'
import classes from './Singleproduct.css'
import HouseIcon from '@material-ui/icons/House';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'



import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const singleproduct = (props)=>{
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
        return images;
        
      }
      
      
      const images = importAll(require.context('../../assets/', false, /\.(png|jpe?g|svg)$/));
    return(
    <React.Fragment>
            <img src={images[props.image]} alt="imc" className={classes.Box}/>
            <h3>{props.name}</h3>
      <h5 style={{color:"#056965",textAlign:"center"}}>Price : ₹{props.price}<span style={{textDecoration: "line-through", fontStyle: "italic",color:"#a4dedc",fontSize:"12px"}}>  ₹{props.mrp}</span></h5>
         <h5>{props.stock===true?"Hurry! Only few stocks left":"Out of Stock"}</h5>  
         
         <h6 style={{marginLeft:"50px"}}>Description</h6>
            <p style={{marginLeft:"100px",marginRight:"50px"}}>{props.description}</p>
       
        
        <footer className={ classes.button}>
          {props.authenticate!==null ?
            props.stock?
        <Button  variant="contained"
        onClick={props.addClicked}
        color="primary"
        size="small"
        startIcon={<AddShoppingCartIcon />}>
            Add To Cart 
        
      </Button>
      :
     
      <Button  variant="contained"
      color="primary"
      size="small"
      disabled
      startIcon={<AddShoppingCartIcon />}>
          Add To Cart 
      
    </Button>
     :<NavLink to="/auth" style={{textDecoration:"none"}}><Button  variant="contained"
     color="primary"
     size="small"
     startIcon={<AddShoppingCartIcon />}>
         Sign in 
     
   </Button></NavLink>
     }
      <Button  variant="contained"
        color="secondary"
        size="small"
        onClick={props.clicked}
        startIcon={<HouseIcon />}>
            Back To Home 
        </Button>
      </footer>
    </React.Fragment>
    )
}

export default singleproduct