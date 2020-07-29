import { combineReducers } from 'redux'

import pruebaReducer from './pruebaReducer';

const rootReducer = combineReducers({
    prueba: pruebaReducer,
})

export default rootReducer;