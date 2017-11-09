import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {teamStandings} from '../../actions'
import {currentPlayers} from '../../actions'
import {hurtPlayers} from '../../actions'
import './Comments.css';


class Temp extends Component {

  componentDidMount() {
    this.props.dispatch(teamStandings())
    this.props.dispatch(currentPlayers())
    this.props.dispatch(hurtPlayers())
  }




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
     
        <h1>Injured</h1>
          <div> 
          {this.props.standings.map((item, index) => {
            return(
              <div key={index}> 

              <p>  {item.stats} </p> 

              </div>
              )
          })}

           </div>


           
             
             
           
           <button className="Dap-button" onClick={() => this.handleLogout()}>Log Out</button>
         <Link  style={savedStyle} to="/dashboard">Back to Searching</Link>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    // injuries: state.playerInjuries.data
    standings: state.teamStandings.data
  }
}



export default connect(mapStateToProps)(Temp);
