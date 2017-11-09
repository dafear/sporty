
const initialState = {
	
	comments: [],
}

const comments = (state=initialState, action) => {
 switch(action.type) {
 	

	case 'RECIEVED_COMMENTS':
		return {
			...state,
			comments: action.comments
		}
 	default:
 		return state
 }
}
export default comments
