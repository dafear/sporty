import { combineReducers } from 'redux'
import activePlayers from './activePlayersReducer'
import playerInjuries from './playerInjuriesReducer'
import teamStandings from './teamStandingsReducer'

const rootReducer = combineReducers({
	activePlayers,
	playerInjuries,
	teamStandings


})

export default rootReducer