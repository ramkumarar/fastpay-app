import React from 'react'
import PropTypes from 'prop-types'

function BankDetails(props) {
    const { imageList, handleClick, selectedBankId } = props

    return (
       <div className="row col-md-8 offset-md-2 mt-2 mb-2 justify-content-center"> 
         {
             imageList.map( (image,i ) => {
               const classSelected = (selectedBankId === image.id) ? 'selected' : ' '
               return(
                   <div 
                   role="presentation" 
                   className = {`${classSelected} card-custom p1-2 pb-2 pt-2 pr-2`} 
                   key={i}
                   onClick={()=> handleClick(image)}
                   >
                    <img src={image.file} alt={image.name} title={image.name} className="card-img" />
                   </div>
               )
             })
         }                
       </div>
    )
}

BankDetails.propTypes = {
    imageList:PropTypes.array.isRequired,
    handleClick:PropTypes.func,
    selectedBankId:PropTypes.number,
}

export default BankDetails