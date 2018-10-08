import { combineReducers } from 'redux'
import testReducer from '../../features/testArea/testReducer'
import eventReducer from '../../features/events/EventReducer'

const rootReducer = combineReducers({
    test: testReducer,
    events: eventReducer
})

export default rootReducer