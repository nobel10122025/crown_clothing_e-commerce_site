import React from 'react'
import './SignInSignUpPage.scss'
import SignIn from '../../Components/sign-in/SignIn'
import SignUp from '../../Components/sign-up/SignUp'

function SignInSignUpPage() {
    return (
        <div className="sign-in-and-sign-up">
           <SignIn />
           <SignUp />
        </div>
    )
}

export default SignInSignUpPage
