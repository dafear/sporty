
const initialState = {

  data: [],

}

const overallTeamStandings = (state=initialState, action) => {
 switch(action.type) {
 	

	case 'OVERALL_TEAM_STANDINGS':
		return {
			...state,
			data: action.teamstandingsentry
		}
 	default:
 		return state
 }
}
export default overallTeamStandings
