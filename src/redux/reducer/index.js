import { combineReducers } from 'redux';
import gamereducer from './gamereducer';
import loginreducer from './loginreducer';
import usereducer from './usereducer';

export default combineReducers({
    game: gamereducer,
    loginkucing: loginreducer,
    user: usereducer
})