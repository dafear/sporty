import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import cooler from '../../images/cooler.png';
import search from '../../images/search.png';
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
         <p className="change">Get your<br/> basket ball stats the way you want 'em<br/> ...fast!<br/> 
          </p>
  

           <div className="wrapper">

           <Link className="Reg" to="/splash">Register</Link>
            <Link className="Sign"  to="/signin">Sign In</Link>

            </div>

            
             <div className="super">
                 <img className="wow" src={cooler} alt="cooler" />
                 <div className="oj">
                  <h3 className="para1">Find Your NBA Stats!</h3>
                  <p> Find stats in 3 categories, Leaders, Injured and Still Playing.</p>
                 </div>
                   
                   </div>

                         <div className="super">
                 <img className="wow" src={search} alt="search" />
                 <div className="oj">
                  <h3 className="para2">Stats Update Daily!</h3>
                  <p> Check back in to find out how you're team is doing.</p>
                 </div>
                   
                   </div>
        


      </div>


    )
  }
}



export default Home;
