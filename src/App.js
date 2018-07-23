import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Payments from './components/payments'
import Loader from './components/Loader'
import PaymentsSubmission from './components/payment-submission'

function App(){
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Payments} />
                <Route path="/payments" component={Payments} />
                <Route path="/loader" component={Loader} />
                <Route path="/payments-submission" component={PaymentsSubmission} />
             </Switch>   
        </div>    
    )
}

export default App