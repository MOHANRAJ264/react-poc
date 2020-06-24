import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
     
    maxWidth: "100%",
    maxHeight: "100%",
    display:"block"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const RecipeReviewCard=(props) => {
  const classes = useStyles();

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
    return images;
    
  }
  
  
  const images = importAll(require.context('../../assets/', false, /\.(png|jpe?g|svg)$/));
 

  return (
    <div style={{ display: "inline-block" }} onClick={props.clicked}>
      <Card
        className={classes.root}
        style={{
          display: "inline-block",
          position: "center",
          width: "600px",
          left: "100px",
          marginLeft: "25px",
          marginRight:"25px",
          marginTop: "50px",
          backgroundColor:"#fff"
        }}
        onClick={props.clicked}
      >
        
        <CardMedia
          className={classes.media}
          image={images[props.image]}
    
          alt="nodeimage"
        />
        <CardHeader
          title={props.title}
        />
        


        <CardContent style={{paddingTop:"1px !important" }}>
      <h5 style={{color:"#056965"}}>Price : ₹{props.price}<span style={{textDecoration: "line-through", fontStyle: "italic",color:"#a4dedc",fontSize:"12px"}}>  ₹{props.mrp}</span></h5>
      </CardContent>
      </Card>
    </div>
  );
}
export default RecipeReviewCard


