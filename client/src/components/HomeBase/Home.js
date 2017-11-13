import React, {Component} from 'react';
import { Link } from 'react-router-dom'
// import './Comments.css';





class Home extends Component {

  


  handleLogout() {
      localStorage.removeItem('apiToken');
      window.location='/signin'
    }



  render() {



    const style2 = {
        fontSize: '30px',
        textAlign: 'center',
    }

  
    

    return (

      <div className="LinkUp" style={style2}>
     
        <h1>BASKET CASE</h1>

           <div className="wrapper">

           <Link className="Reg" to="/splash">Register</Link>
            <Link className="Sign"  to="/signin">Sign In</Link>

            </div>

            
            <div className="footer">

               <p className="change">Basket Case is a creative way to get your stats<br/>  the way you want em ...fast!<br/> 
          </p>
  
           
            </div>
        


      </div>


    )
  }
}



export default Home;
