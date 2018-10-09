import { combineReducers } from 'redux'
import testReducer from '../../features/testArea/testReducer'
import eventReducer from '../../features/events/EventReducer'
import { reducer as FormReducer } from 'redux-form'
import modalReducer from '../../features/Modals/modalReducer'
import authReducer from '../../features/auth/authReducer'

const rootReducer = combineReducers({
    form: FormReducer, 
    test: testReducer,
    events: eventReducer,
    modal: modalReducer, 
    auth: authReducer
})

export default rootReducer