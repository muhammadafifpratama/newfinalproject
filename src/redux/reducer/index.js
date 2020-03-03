import { combineReducers } from 'redux';
import { gamereducer } from './gamereducer';

export default combineReducers({
    game: gamereducer
})