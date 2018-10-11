import { combineReducers } from 'redux';
import chatReducer from './chat_reducer';

const rootReducer = combineReducers({
    chatReducer: chatReducer,
})

export default rootReducer;