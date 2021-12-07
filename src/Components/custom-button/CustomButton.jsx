import React from 'react'
import './CustomButton.scss'
function CustomButton({children , isGoogleSignIn, ...otherprops}) {
    return (
        <button className={`${isGoogleSignIn?'googleSignIn':''} custom-button`} {...otherprops}>
            {children}
        </button>
    )
}

export default CustomButton
