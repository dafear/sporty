import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Home from './HomeBase/Home'
import Splash from './Splash/Splash'
import Temp from './GameStats/Temp'
import SignIn from './SignIn/SignIn'
import TeamRank from './GameStats/TeamRank'
import NotPlaying from './GameStats/NotPlaying'
import CurrentGammers from './GameStats/CurrentGammers'
import './Main.css'

const Main = () => (

<Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/splash" component={Splash} />
      <Route exact path="/dashboard" component={Temp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/leaderboard" component={TeamRank} />
      <Route exact path="/outgamers" component={NotPlaying} />
      <Route exact path="/ingamers" component={CurrentGammers} />
      
      
    </div>
  </Router>

)

export default Main;
