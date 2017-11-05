import { combineReducers } from 'redux'
import hood from './hood'
import map from './commentReducer'

const rootReducer = combineReducers({
	hood,
	map 

})

export default rootReducer