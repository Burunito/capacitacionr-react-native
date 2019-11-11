import _ from 'lodash'
const initialState = {
    nombre: null
}
function cliente(state = initialState, action){
    let cState = _.cloneDeep(state)
    switch(action.type){
        case 'SET_CLIENTE': {
            cState = {...cState, ...action.payload}
            return cState
        }
        case 'RESET_CLIENTE': {
            return initialState
        }
    }
    return state
}
export default cliente