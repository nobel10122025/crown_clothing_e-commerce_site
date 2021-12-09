import React, { Component } from 'react'
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/Firebase';
import './SignIn.scss';

export default class SignIn extends Component {
    constructor(){
        super()
        this.state = {
            email:"",
            password:""
        }
    }

    handleChange = (event) => {
        const {value , name} = event.target;
        this.setState({ [name]:value })
    }
    handleSubmit =async (event) => {
        event.preventDefault()
        const {email , password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:"",password:""})
        } catch(error){
            console.log(error)
        }
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email  and password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    required
                    />
                    <FormInput 
                    name="password"
                    type="password"
                    label="Password"
                    value={this.state.password}
                    handleChange={this.handleChange}
                    required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">
                            Sign in
                        </CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
