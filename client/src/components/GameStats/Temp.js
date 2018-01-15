import React, {Component} from 'react';
import { Link } from 'react-router-dom'
// import './Comments.css';





class Temp extends Component {

  

  handleLogout() {
      localStorage.removeItem('apiToken');
      window.location='/signin'
    }

    

    render() {



      const savedStyle2 = {

        textAlign: 'center',
          position: 'center',
          borderRadius: 5,
          width: 500,    
          padding: 5,
          margin: 10,
          color: 'white',
          fontSize: 25,

      }


      const savedStyle5 = {

          position: 'absolute',
          top: 10,
          left: 0,
          backgroundColor: '#99c5ff',
          borderRadius: 5,
          width: 150,
          textAlign: 'center',
          padding: 5,
          margin: 5,
          // marginBottom: 5,
          marginTop: 5,
          color: 'white',
          fontSize: 18,

      }

      const height250 = {

        height: 150,
        backgroundColor: '#bf00ff',

      }

         return (
     
                 <div className="container">

     
                 <h1 className="leader">STATS</h1>



            <div className="row">

             <div className="column-50" style={height250}>

             <Link className="linkStyle" style={savedStyle2}  to="/leaderboard"> Leaders</Link>
             <p className="next"> Who's in the lead find out here! </p>

              </div>

            <div className="column-50" style={height250}>

             <Link className="linkStyle" style={savedStyle2} to="/outgamers">Injured Reserves</Link>
             <p className="next">You guessed it, these guys aren't in the game.</p>

              </div>

             </div>

               <div className="row">

             <div className="column-100" style={height250}>

           <Link className="linkStyle" style={savedStyle2} to="/ingamers">Still Playing</Link>
            <p className="next"> These are the lucky one's, still on their feet! </p>

             </div>

           </div>
           
        
        
             <button className="Dap-button" style={savedStyle5} onClick={() => this.handleLogout()}>Log Out</button>
           
      </div>
      
    )
  }
}



export default Temp;
