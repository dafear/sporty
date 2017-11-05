import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Splash from './Splash/Splash'
import Temp from './Comments/Temp'
import SignIn from './SignIn/SignIn'
// import Comment from './AddComment/Comment'
// import Comments from './Comments/Comments'
import './Main.css'

const Main = () => (

<Router>
    <div>
      <Route exact path="/" component={Splash}/>
      <Route exact path="/dashboard" component={Temp} />
      <Route exact path="/signin" component={SignIn}/>
      
      
    </div>
  </Router>

)

export default Main;
