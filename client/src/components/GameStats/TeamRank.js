import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {teamStandings} from '../../actions'


import './Comments.css';


class TeamRank extends Component {

  componentDidMount() {
    this.props.dispatch(teamStandings())
   
  }




  handleLogout() {
      localStorage.removeItem('apiToken');
      window.location='/signin'
    }

       render() {



    const savedStyle = {

          position: 'absolute',
          top: 10,
          right: 0,
          backgroundColor: '#9b59b6',
          borderRadius: 5,
          width: 150,
          textAlign: 'center',
          padding: 5,
          margin: 5,
          color: 'white',
          fontSize: 18,

      }

     

       const style1 = {

           textAlign: 'center',
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

    return (

      <div className="HighRank">
     
        <h1 className="leader">Leauge Rankings</h1>

          <div> 
          {this.props.standings.map((item, index) => {
            return(
              <div className='venueItem' key={index}> 

                 <h3 className="title" style={style1}>RANK</h3>
                    <p> <strong>{item.rank} </strong></p> 

                <h3 className="title" style={style1}>TEAM</h3>
              <p><strong>{item.team.Name} </strong></p>   
          
             </div>
              )
          })}

           </div>        
                        
           <button className="Dap-button" style={savedStyle5} onClick={() => this.handleLogout()}>Log Out</button>
         <Link className="linker-style"  style={savedStyle} to="/dashboard">Back to Searching</Link>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  
  return {
   
    standings: state.teamStandings.data
  }
}



export default connect(mapStateToProps)(TeamRank)
