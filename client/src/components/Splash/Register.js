import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {registerUser} from '../../actions/index'
import './register.css';


  class Register extends Component {
    constructor() {
      super();
      this.state = {
      email: '',
      password: '',
      logged: false,

    };
  }

  handleEmailChange = (evt) => {

    this.setState({ email: evt.target.value });

  }

  handlePasswordChange = (evt) => {

    this.setState({ password: evt.target.value });

  }


    render() {

      
      const style = {
        textAlign: 'center',
    };
    

      const subtitle = {
        fontFamily: 'Droid Serif',
        fontWeight: 'bold'
      }

          return (

               <div className="list" style={style}>
             
                  

                 <form className="register-form" onSubmit={(event)=>{
                   event.preventDefault()
                   this.props.dispatch(registerUser(this.state.email, this.state.password))
                   }}>


              <div>

                     <h1 className="catch">BASKET CASE</h1>
                     <h2 style={subtitle}>Not your normal Basketball Game.
                     <br/>Register here and find out who's playing!</h2>

                    </div>

                   <input

                     type="text"
                     required
                     placeholder="Enter email"
                     value={this.state.email}
                     onChange={this.handleEmailChange}
                     /><br/>

                     <input
                     type="password"
                     required
                     placeholder="Enter password"
                     value={this.state.password}
                     onChange={this.handlePasswordChange}
                     /><br/>

                   <button className="app-button">Sign up</button>

                </form>

                  <p style={{fontSize: 20, fontWeight: 'bold', fontFamily: 'Droid Serif', position: 'relative', 'zIndex': 2}}>Already have an account? <Link to="/signin">
                      <a>Sign in here</a></Link></p>

             </div>
        )

    }

  };

      export default connect()(Register)
