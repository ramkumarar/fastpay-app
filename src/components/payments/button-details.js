import React from 'react'
import PropTypes from 'prop-types'

function ButtonDetails(props){
    const {handleSubmit,details}  = props
    return(
        <div className="mb-5 mt-3">
        {
            details.selectedBankId ? 
             (
                 <div className="text-center">
                     <input
                        type="submit"
                        className="btn btn-primary btn-md active mr-3" 
                        aria-pressed="true"
                        value="Accept"
                        onClick={handleSubmit}
                     />
                     <input
                       type="submit"
                       className="btn btn-secondary btn-md active"  
                       aria-pressed="true"
                       value="Cancel"
                    />
                 </div>
             ) : ''
        }
        </div>
    )
}

ButtonDetails.PropTypes={
    handleSubmit : PropTypes.func.isRequired,
    details:PropTypes.object,
}

export default ButtonDetails