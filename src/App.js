import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/homepage/Homepage'
import Shoppage from './Pages/Shoppage/Shoppage'
import Header from './Components/header/Header'
import SignInSignUpPage from './Pages/SignIn-SignUp-page/SignInSignUpPage';
import { auth  , createUserProfileDocument} from './firebase/Firebase';

class App extends React.Component {

  constructor(){
    super()
    this.state= {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null ;

  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async authUser => {
      if(authUser) {
        const userRef = await createUserProfileDocument(authUser); 
        userRef.onSnapshot((snapShot)=>{
          this.setState({
            currentUser : {
              id : snapShot.id,
              ...snapShot.data()
            }
          } , ()=> console.log(this.state))
        })
      }else{
        this.setState({currentUser : authUser})
      }

    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render (){
    return(
    <div>
    <Router>
      <Header currentUser={this.state.currentUser}/>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Homepage />} />
        <Route path="/Shop" caseSensitive={false} element={<Shoppage />} />
        <Route path="/Contact" caseSensitive={false} element={<SignInSignUpPage />} />
      </Routes>
    </Router>
    </div>
    )
  }
}

export default App;
