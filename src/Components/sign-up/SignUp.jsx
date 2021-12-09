import React, { Component } from 'react'
import './SignUp.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import {auth , createUserProfileDocument}  from "../../firebase/Firebase"

export default class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            displayName : "",
            email : "",
            password : "",
            confirmPassword : ""
        }
    }

    handleChange = (event)=> {
        const {name , value}  = event.target
        this.setState({[name]:value})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {displayName , email , password , confirmPassword} = this.state
        
        if(password!==confirmPassword){
            alert('Passwords Dont match')
            return
        }
        try{
           const {user} = await auth.createUserWithEmailAndPassword(email , password)
           await createUserProfileDocument( user , {displayName}) 
            this.setState({
                displayName : '',
                email : '',
                password:'',
                confirmPassword:''
            })

        }catch(error){
            console.log("users cant be created")
        }
    }
    render() {
        const {displayName , email , password , confirmPassword} = this.state
        return (
            <div className = "sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    label="Name"
                    value={displayName}
                    handleChange={this.handleChange}
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    value={email}
                    handleChange={this.handleChange}
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    value={password}
                    handleChange={this.handleChange}
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    value={confirmPassword}
                    handleChange={this.handleChange}
                    required
                />
                <CustomButton type="submit">
                    SIGN UP
                </CustomButton>
                </form>
            </div>
        )
    }
}
