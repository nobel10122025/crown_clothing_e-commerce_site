import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import Header from './Components/header/Header'

import Homepage from './Pages/homepage/Homepage'
import Shoppage from './Pages/Shoppage/Shoppage'
import SignInSignUpPage from './Pages/SignIn-SignUp-page/SignInSignUpPage';
import CheckoutPage from './Pages/checkout/CheckoutPage';

import { auth  , createUserProfileDocument} from './firebase/Firebase';
import {setCurrentUser} from './Redux/User/user.action';

class App extends React.Component {

  unsubscribeFromAuth = null ;

  componentDidMount(){
    const {setCurrentUser} = this.props
 
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async authUser => {
      if(authUser) {
        const userRef = await createUserProfileDocument(authUser); 
        userRef.onSnapshot((snapShot)=>{
          setCurrentUser(
            {
              id : snapShot.id,
              ...snapShot.data()
            }
          )
        })
      }else{
        setCurrentUser(authUser)
      }

    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  
  render (){
    return(
    <div>
      <Header/>
      <Switch>
        <Route path="/" exact component={Homepage } />
        <Route path="/Shop"  component={Shoppage } />
        <Route path="/Contact"  component={SignInSignUpPage } />
        <Route path="/Checkout" exact  component={CheckoutPage } />
      </Switch>
    </div>
    )
  }
}

const dispatchStatetoProps = (dispatch) => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(null,dispatchStatetoProps)(App);
