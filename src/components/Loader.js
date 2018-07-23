import React from 'react'
import PropTypes from 'prop-types'
import loaderImg from '../assets/loading5.gif'

function Loader(props){
    const {details} =props

    return(
        <div className="container-loader">
           <div className="loader">
              <div className="row">
                  <div className="col-md-6 offset-md-3 text-center">
                    <h6> Please wait while you are redirecting to {details.selectedBankName } </h6>
                  </div>
              </div>
              <div className="row mt-3">
                 <div className="col-md-2 offset-md-3 text-center">
                    <img src={details.logo} alt="" />
                  </div>
                  <div className="col-md-2 mt-2 text-center">
                    <img src={loaderImg} alt="" />
                  </div>
                  <div className="col-md-2 text-center">
                    <img src={details.selectedBankImg} alt="" />
                  </div>
              </div>    
           </div>
        </div>
    )
}

Loader.PropTypes = {
    details: PropTypes.object.isRequired,
}

export default Loader