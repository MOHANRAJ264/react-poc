import React, { Component } from 'react'
import {connect} from 'react-redux'
import Card from '../../Components/Card/Card'
import axios from 'axios'
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler'
import * as actions from '../../Store/actions/index'
import Spinner from '../../Components/Spinner/Spinner'
import Singleproduct from "../../Components/Singleproduct/Singleproduct";
import Carousel from '../../Components/Carousel/Carousel'

class Home extends Component{
    state={
        loaded:false,
        singleprod:false,
        image:null,
        name:null,
        price:null,
        mrp:null,
        description:null,
        id:null,
        stock:null
    }
    componentDidMount(){
    
        this.props.ontryAutosignin()
        this.props.onInitIngredients()
        this.setState({loaded:true})
    }
    clickHandler=(d)=>{
        this.setState({image:d.image,name:d.name,price:d.price,mrp:d.mrp,id:d._id.toString(),stock:d.in_stock,description:d.description})
        this.setState({singleprod:true})
    }
    clickCancelHandler=()=>{
        this.setState({singleprod:false})
    }
    addclickHandler=(data)=>{
        this.props.onCartValueChange(data,1)
        this.props.history.push('/cart')
    }
    
    render(){
        
        let prod=<Spinner/>
   if(this.props.products!==null){
        prod=this.props.products.map(product=>{
        return <Card 
        key={product._id} 
        title={product.name} 
        content={product} 
        image={product.image}
        price={product.price}
        mrp={product.mrp}
        clicked={()=>this.clickHandler(product)}
        />
    })
    
}    

        return(
            <React.Fragment>
           
            
             {this.state.singleprod?
                <div><Singleproduct
                 clicked={this.clickCancelHandler}
                 addClicked={()=>this.addclickHandler(this.state.id)} 
                image={this.state.image} 
                price={this.state.price} 
                mrp={this.state.mrp} 
                name={this.state.name} 
                id={this.state.id} 
                stock={this.state.stock} 
                description={this.state.description} 
                authenticate={this.props.token}
                /></div>:
                <div>
                     <Carousel/>
                         <div style={{textAlign:"center",backgroundColor:"#eee"}}>
                              {prod} 
                         </div>
                </div>}  
         
            </React.Fragment>
        )
        
    }
}
const mapStatetoProps = state =>{
    return{
        products:state.home.products,
        token:state.auth.token
    }
}
const mapDispatchToPRops = dispatch =>{
    return{
        onInitIngredients:()=>dispatch(actions.initproducts()),
        ontryAutosignin:()=>dispatch(actions.autosignin()),
       onCartValueChange:(prodid,quantity)=>dispatch(actions.cartvaluechanged(prodid,quantity))

    }
}

export default connect(mapStatetoProps,mapDispatchToPRops)(withErrorHandler(Home,axios))