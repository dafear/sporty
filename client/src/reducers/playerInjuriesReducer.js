
const initialState = {
	data: [],
}

const playerInjuries = (state=initialState, action) => {
 switch(action.type) {
 	

	case 'PLAYER_INJURIES':
		return {
			...state,
			data: action.playerentry
		}
 	default:
 		return state
 }
}
export default playerInjuries
