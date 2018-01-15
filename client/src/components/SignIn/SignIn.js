import React, {Component} from 'react';
import {signinUser} from '../../actions/index';
import {connect} from 'react-redux';





class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      logged: false,
      showError: false,
      submitted: false,
    };
  }




  handleEmailChange = (evt) => {
      this.setState({ email: evt.target.value, error: false });
    }

  handlePasswordChange = (evt) => {
      this.setState({ password: evt.target.value, error: false });
    }




    render() {


       const style = {
            textAlign: 'center',
           };


           // console.log(this.state.error);
         let errorMessage = ""
        if (this.state.error) {
            errorMessage =  "Sorry incorrect password!"

         }



      return (

              <div className="Signin" style={style}>
        

              <form className="login-form" onSubmit={(event)=>{
                event.preventDefault()
                this.props.dispatch(signinUser(this.state.email, this.state.password))
               }}>

                   <h1 className="catch">BASKET CASE</h1>
                  <h2 className="leader">A Different Kind of Game!</h2>

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
                <button className="app-button">Sign In</button>

                <p>{errorMessage}</p>

              </form>


              </div>



    )
  }
}
export default connect()(SignIn)
