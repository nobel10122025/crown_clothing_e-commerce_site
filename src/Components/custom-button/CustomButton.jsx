import React from 'react'
import './CustomButton.scss'
function CustomButton({children , ...otherprops}) {
    return (
        <button className="custom-button" {...otherprops}>
            {children}
        </button>
    )
}

export default CustomButton
