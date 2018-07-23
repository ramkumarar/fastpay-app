import React from 'react'
import PropTypes from 'prop-types'

function Content(props) {
    const { details } = props

    return (
      <div>
       <div className="row col-md-9 offset-md-2 mt-5 justify-content-center"> 
          <div className="col-md-12 merchant-text">
            { details.merchantId ?
                <p> Merchant Id : {details.merchantId} </p> : ''
            }            
          </div>
          <div className="col-md-12 merchant-text">
            { details.merchantCustomerId ?
                <p> Customer Id : {details.merchantCustomerId} </p> : ''
            }            
          </div>
          <div className="col-md-12 merchant-text">
            { details.amount ?
                <p> Amount : {details.amount} </p> : ''
            }            
          </div>
          </div>
          <span className="border-top my-3"/>
       </div>
    )
}

Content.propTypes = {
  details:PropTypes.object.isRequired,
}

export default Content