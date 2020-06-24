import React,{Component} from "react"
import Modal from '../../Components/Modal/Modal'

const withErrorHandler=(WrappedComponent,axios)=>{
    return class extends Component{
        state={
            error:null
        }
        constructor(){           
            super()
            axios.interceptors.request.use(req=>{
                this.setState({error:null})
                return req
            })
            axios.interceptors.response.use(res => res,error=>{
                this.setState({error:error})
            })
        }
      
         componentWillUnmount(){
            axios.interceptors.request.eject(this.reqinterceptor)
            axios.interceptors.request.eject(this.resinterceptor)

        }
        errorconfirmedHandler=()=>{
            this.setState({error:null})
        }
        render(){
            return(
                <React.Fragment>
                <Modal show={this.state.error}
                modalclosed={this.errorconfirmedHandler}>
                     {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props}/>
            </React.Fragment>
            )
        }
    }
}

export default withErrorHandler