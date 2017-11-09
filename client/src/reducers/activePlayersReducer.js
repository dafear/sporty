
const initialState = {
	data: [],
}

const activePlayers = (state=initialState, action) => {
 switch(action.type) {
 	

	case 'ACTIVE_PLAYERS':
		return {
			...state,
			data: action.playerentry
		}
 	default:
 		return state
 }
}
export default activePlayers
