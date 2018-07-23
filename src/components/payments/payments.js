import React,{ Component } from 'react'
import axios from 'axios'
import querySearch from 'stringquery'
import Loader from '../Loader'
import MerchantDetails from './merchant-details'
import BankDetails from './bank-details'
import StatusDetails from './status-details'
import ButtonDetails from './button-details'
import {Header,Footer} from '../Layouts'

import Logo from '../../assets/natwest-logo.png'
import hsbcImg from '../../assets/hsbc.png'
import barclaysImg from '../../assets/barclays.png'
import lloyddsImg from '../../assets/lloyds.png'
import santanderImg from '../../assets/santander.png'
import rbsImg from '../../assets/rbs.png'
import natwestImg from '../../assets/natwest.png'
import base64 from 'base-64'


const imageList=[
    {
        id:1,
        file:rbsImg,
        name:'rbs',
    },
    {
        id:2,
        file:barclaysImg,
        name:'barclays',
    },{
        id:3,
        file:lloyddsImg,
        name:'lloyds',
    },{
        id:4,
        file:natwestImg,
        name:'natwest',
    },{
        id:5,
        file:hsbcImg,
        name:'hsbc',
    },{
        id:6,
        file:santanderImg,
        name:'santander',
    },
]

class Payments extends Component {
    constructor(props){
        super(props)
        const {transactionstate}  =querySearch(this.props.location.search)

        const query =  (transactionstate === undefined) ? {} : querySearch(base64.decode(transactionstate))
            

        this.state={
            selectedBankName:'',
            selectedBankId:'',
            loading:false,
            imageList,
            logo:Logo,
            query,
        }
        this.handleClick= this.handleClick.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    handleClick(value) {
        this.setState({
            selectedBankName:value.name,
            selectedBankId:value.id,
            selectedBankImg:value.file,
        })
    }

    handleSubmit = () => {
       // const url = 'http://localhost:9090/payments'
       const url = 'https://nw-fastpay.herokuapp.com/payments'
       
        this.setState({
            loading:true,
        })
        const {amount,endToEndIdentifier,merchantCustomerId,merchantId} = this.state.query
        const data= {
            merchantId,
            merchantCustomerId,
            endToEndIdentifier,
            amount,
        }

        const paymentId=123456

        axios.post(url,data)
         .then(response => {
             this.setState({
                 loading :false
             })             
             window.location.href = `https://obp-aspsp-authorize.herokuapp.com/auth/oauth/authorize?response_type=code&client_id=pisp&scope=openpay&state=${response.data.paymentId}&redirect_uri=https://nwbfastpay.herokuapp.com/payments-submission`
            
         })
         .catch((err)=>{
             console.log(err)
             setTimeout(() => {
                 this.setState({
                     loading:false
                 })
                 window.location.href=`http://example.com?transactionId=${endToEndIdentifier}?status=failed`
             }, 2000);
         })
    }

    render(){
        const {query,selectedBankId} = this.state
        if(this.state.loading) {
            return (<Loader details={this.state}/>)
        }

        return (
            <div>
            <Header/>
            <div className="dashboard">
                 <MerchantDetails details={query} />
                 <BankDetails selectedBankId={selectedBankId} imageList={imageList} handleClick={this.handleClick} />
                 <StatusDetails details={this.state} />
                 <ButtonDetails handleSubmit={this.handleSubmit} details={this.state} />
            </div>
            <Footer/>
            </div>

        )
    }
}

export default Payments