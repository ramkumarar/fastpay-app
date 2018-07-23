import React,{ Component } from 'react'
import axios from 'axios'
import querySearch from 'stringquery'
import Loader from '../Loader'

class PaymentsSubmission extends Component {
    constructor(props){
        super(props)
        const query=querySearch(this.props.location.search)
        this.state={
            query,
        }
    }

    componentDidMount = () => {
        const url = 'https://nw-fastpay.herokuapp.com/payments-submission'
        this.setState({
            loading : true,
        })
        const { state, code } = this.state.query
        const data = {
            paymentId:state,
            oauthCode:code,
        }

        
         axios.post(url,data)
         .then( (response) => {
                 this.setState({
                     loading : false,
                 })
                 window.location.href = `http://example.com?transactionId=${response.data.endToEndIdentifier}&paymentId=${response.data.paymentId}&status=success`
             })
         .catch(error => {
              console.log(error)
              setTimeout(()=>{
                  this.setState({
                      loading:false,
                  })
                  window.location.href= `http://example.com?&paymentId=${data.paymentId}&status=failed`
              },2000)
         })             

        

        
         
    }

    render(){
        const { query } = this.state
        if(this.state.loading){
             return (<Loader details={this.state} />)
        }

        return (
            <div>
                <p>{query.paymentId} </p>
            </div>
        )
    }
}

export default PaymentsSubmission
