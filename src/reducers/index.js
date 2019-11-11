import { combineReducers } from 'redux'
import cliente from './cliente'
import servicio from './servicio'

const reducers = combineReducers({
    cliente,
    servicio
})
export default reducers