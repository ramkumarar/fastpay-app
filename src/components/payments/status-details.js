import React from 'react'
import PropTypes from 'prop-types'

function StatusDetails(props) {
    const { details } = props

    return (
       <div className="row col-md-8 offset-md-2 mt-2 mb-2 justify-content-center">
         {
             details.selectedBankId ?
             <div className="alert alert-warning m-0">
               <p className="text-center m-0"> Do you allow fastpay to initiate payment of <b>{details.query.amount} </b>
                on behalf of you, from your bank <b> {details.selectedBankName} </b> ? </p>
             </div> : ''   
         }         
        </div>          
    )
}

StatusDetails.propTypes = {
  details:PropTypes.object.isRequired,
}

export default StatusDetails