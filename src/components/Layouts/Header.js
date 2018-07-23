import React from 'react'
import Logo from '../../assets/natwest-logo.png'

function Header(){
    return(
        <div className="header clearfix">
           <div className="container">
                <img src={Logo} alt="logo" className="logo" />
           </div>
        </div>
    )
}

export default Header