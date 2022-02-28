import React,{lazy , Suspense} from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import Header from './Components/header/Header'
import Spinner from './Components/Spinner/Spinner';

import { auth  , createUserProfileDocument} from './firebase/Firebase';
import {setCurrentUser} from './Redux/User/user.action';

const Homepage = lazy(() => import('./Pages/homepage/Homepage'))
const Shoppage = lazy(() => import('./Pages/Shoppage/Shoppage'))
const SignInSignUpPage = lazy(() => import('./Pages/SignIn-SignUp-page/SignInSignUpPage'))
const CheckoutPage = lazy(() => import('./Pages/checkout/CheckoutPage'))

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
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact component={Homepage } />
          <Route path="/Shop"  component={Shoppage } />
          <Route path="/Contact"  component={SignInSignUpPage } />
          <Route path="/Checkout" exact  component={CheckoutPage } />
        </Switch>
      </Suspense>
    </div>
    )
  }
}

const dispatchStatetoProps = (dispatch) => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(null,dispatchStatetoProps)(App);
