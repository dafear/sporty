import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import './Comments.css';


class Temp extends Component {

  handleLogout() {
      localStorage.removeItem('apiToken');
      window.location='/signin'
    }

  render() {



    const style2 = {
        fontSize: '30px',
       // textAlign: 'left',
    }

     const style = {
        // listStylePosition: 'inside',
       listStyleType: 'none',
    }


    const savedStyle = {

          position: 'absolute',
          top: 10,
          right: 0,
          backgroundColor: '#99c5ff',
          borderRadius: 5,
          width: 200,
          textAlign: 'center',
          padding: 5,
          margin: 5,
          color: 'white',
          fontSize: 18,

      };

      const style3 = {

          position: 'absolute',
          top: 10,
          left: 0,
           textAlign: 'center',
            padding: 5,
          margin: 5,

      }

    return (
      <div className="Comments">
       <video className="fullscreen-bg__video" playsInline autoPlay muted loop>
                      <source src="video.mp4" type="video/mp4"/>
                    </video>
        <h1 style={style3}>Comments</h1>
          
            <div className="comment-section" style={style2}>
              <p className="comment-text">cool</p>
             
            </div>
           <button className="Dap-button" onClick={() => this.handleLogout()}>Log Out</button>
         <Link  style={savedStyle} to="/dashboard">Back to Searching</Link>

      </div>
    )
  }
}



export default Temp;
