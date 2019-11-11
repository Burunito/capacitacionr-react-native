import _ from 'lodash'
const initialState = {
    nombre: null
}
function servicio(state = initialState, action){
    let cState = _.cloneDeep(state)
    switch(action.type){
        case 'SET_SERVICIO': {
            cState = {...cState, ...action.payload}
            return cState
        }
        case 'RESET_SERVICIO': {
            return initialState
        }
    }
    return state
}
export default servicio