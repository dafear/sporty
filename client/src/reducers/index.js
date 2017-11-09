import { combineReducers } from 'redux'
import activePlayers from './activePlayersReducer'
import comments from './commentReducer'
import playerInjuries from './playerInjuriesReducer'
import teamStandings from './teamStandingsReducer'

const rootReducer = combineReducers({
	activePlayers,
	comments,
	playerInjuries,
	teamStandings


})

export default rootReducer