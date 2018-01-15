import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {hurtPlayers} from '../../actions'
import './Comments.css';


class NotPlaying extends Component {

  componentDidMount() {

    this.props.dispatch(hurtPlayers())
  }


  handleLogout() {
      localStorage.removeItem('apiToken');
      window.location='/signin'
    }

      render() {
    

     const style1 = {

           textAlign: 'center',
      }


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

      };

     


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

      <div className="OutGames">
     
        <h1 className="leader">Injured</h1>

          <div> 
          {this.props.injuries.map((item, index) => {
            return(
              <div className='venueItem' key={index}>

                   <h3 className="title" style={style1}> PLAYER</h3>
                <p><strong>{item.player.FirstName} {item.player.LastName} #{item.player.JerseyNumber}</strong></p>

                  <h3 className="title" style={style1}>TEAM</h3>
                 <p><strong>{item.team.Name}</strong></p>

                    <h3 className="title" style={style1}>POSITION</h3>
                 <p><strong> {item.player.Position}</strong> </p>

               <h3 className="title" style={style1}>HEIGHT/WEIGHT</h3>

                  <p><strong>{item.player.Height} {item.player.Weight}lbs</strong></p>

               <h3 className="title" style={style1}>AGE</h3>
                  <p><strong>{item.player.Age}</strong></p>

              <h3 className="title" style={style1}>ROOKIE</h3>
                  <p> <strong>{item.player.IsRookie}</strong></p>

              <h3 className="title" style={style1}>INJURY-TYPE</h3>
                <p><strong>{item.injury}</strong></p>
  
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
    
    injuries: state.playerInjuries.data
  
  }
}



export default connect(mapStateToProps)(NotPlaying)
