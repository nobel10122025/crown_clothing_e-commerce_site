import React from 'react'
import './CustomButton.scss'
function CustomButton({children , isGoogleSignIn, inverted, ...otherprops}) {
    return (
        <button className=
        { `${ isGoogleSignIn ? 'googleSignIn' : '' } ${
            inverted? 'inverted' : ''
        } custom-button`} 
            {...otherprops}>
            {children}
        </button>
    )
}

export default CustomButton
