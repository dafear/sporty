import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {currentPlayers} from '../../actions'
// import './Comments.css';


class CurrentGammers extends Component {

  componentDidMount() {
    
    this.props.dispatch(currentPlayers())
    
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
          backgroundColor: '#99c5ff',
          borderRadius: 5,
          width: 150,
          textAlign: 'center',
          padding: 5,
          margin: 5,
          color: 'white',
          fontSize: 18,

      };

     

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

      <div className="InGames">
     
        <h1>Active</h1>

          <div>

             {this.props.stillPlaying.map((item, index) => {
         
            return(

              <div className='venueItem' key={index}> 

               <h3 className="title" style={style1}> PLAYER</h3>
            <p><strong> {item.player.FirstName} {item.player.LastName}, #{item.player.JerseyNumber}</strong></p>

                <h3 style={style1}> POSITION</h3>
              <p>{item.player.Position}</p>  

                <h3 style={style1}>HEIGHT/WEIGHT</h3>
                   <p>{item.player.Height}, {item.player.Weight}lbs</p> 

                      <h3 style={style1}>AGE</h3>
                        <p>{item.player.Age}</p>

                      <h3 style={style1}> ROOKIE</h3>  
                       <p>{item.player.IsRookie}</p>


                        <h3 style={style1}>TEAM</h3>
                      {item.team ? <p>{item.team.Name}</p> : ''} 
           
                 </div>
               )
           })}

       </div>
                   
             
           
           <button className="Dap-button" style={savedStyle5} onClick={() => this.handleLogout()}>Log Out</button>
         <Link  style={savedStyle} to="/dashboard">Back to Searching</Link>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log(state.activePlayers.data)
  return {
    stillPlaying: state.activePlayers.data
  
  }
}



export default connect(mapStateToProps)(CurrentGammers)
