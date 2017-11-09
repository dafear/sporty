 import axios from 'axios'
 // import $ from 'jquery'



 

 export const registerUser = (email, password)=> {
   return (dispatch) => {

     return fetch('http://localhost:8080/api/auth/register', {
         method: 'POST',
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify({email, password})
      })
       .then(res => res.json())
       .then(json => window.location = '/signin')
       .catch(err => {
           console.log(err);
       });
   }

  }

  export const signinUser = (email, password)=> {
   return (dispatch) => {

     const token = btoa(`${email}:${password}`);
     fetch('http://localhost:8080/api/auth/login', {
         method: 'POST',
         headers: {
             // Provide our username and password as login credentials
             Authorization: `Basic ${token}`
         }
     })
     .then(res => res.json())
     .then(data => {
       localStorage.setItem('apiToken', data.authToken);
       window.location='/dashboard';
     })
     .catch(err => {
        console.log(err);
     })
   }
  }



 export const OVERALL_TEAM_STANDINGS = 'OVERALL_TEAM_STANDINGS';
 export const overallTeamStandings = (teamstandingsentry) => ({
  type: OVERALL_TEAM_STANDINGS,
  teamstandingsentry


 });

 export const teamStandings = () => {
 return (dispatch) => {

  fetch('https://api.mysportsfeeds.com/v1.1/pull/nba/2017-2018-regular/overall_team_standings.json?', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
       "Authorization": "Basic " + btoa("dafear" + ":" + "sidney12"),
       'Content-Type': 'application/json'
    },
    body: JSON.stringify()

  })
  .then(res => res.json())
  .then(data => {
    dispatch(overallTeamStandings(data.overallteamstandings.teamstandingsentry)) 
    
  }) 
   .catch(err => {
    console.log(err);
   })

 }
}

 export const ACTIVE_PLAYERS = 'ACTIVE_PLAYERS';
 export const activePlayers = (playerentry) => ({
  type: ACTIVE_PLAYERS,
  playerentry

 });

export const currentPlayers = () => {
 return (dispatch) => {

  fetch('https://api.mysportsfeeds.com/v1.1/pull/nba/2017-2018-regular/active_players.json', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
       "Authorization": "Basic " + btoa("dafear" + ":" + "sidney12"),
       'Content-Type': 'application/json'
    },
    body: JSON.stringify()

  })
  .then(res => res.json())
   .then(data => {
    dispatch(activePlayers(data.activeplayers.playerentry))
  
  }) 
   .catch(err => {
    console.log(err);
   })

 }
}


export const PLAYER_INJURIES = 'PLAYER_INJURIES';
 export const playerInjuries = (playerentry) => ({
  type: PLAYER_INJURIES,
   playerentry

 });

export const hurtPlayers = () => {
 return (dispatch) => {

  fetch('https://api.mysportsfeeds.com/v1.1/pull/nba/2017-2018-regular/player_injuries.json', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
       "Authorization": "Basic " + btoa("dafear" + ":" + "sidney12"),
       'Content-Type': 'application/json'
    },
    body: JSON.stringify()

  })
  .then(res => res.json())
   .then(data => {
    dispatch(playerInjuries(data.playerinjuries.playerentry))
  }) 
   .catch(err => {
    console.log(err);
   })

 }
}






export const RECIEVED_COMMENTS = 'RECIEVED_COMMENTS';
export const recievedComments = (comments) => ({
  type: RECIEVED_COMMENTS,
  comments
});



export const saveComment = (comment) => {
 return (dispatch) => {

   const token = localStorage.getItem('apiToken');
   fetch('http://localhost:8080/api/comment', {
       method: 'POST',
       headers: {
           // Provide our username and password as login credentials
           Authorization: `Bearer ${token}`,
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({comment})
   })
   .then(res => res.json())
   .then(comments => {
     dispatch(recievedComments(comments))
     window.location = '/dashboard'
   })
   .catch(err => {
      console.log(err);
   })
 }
}


