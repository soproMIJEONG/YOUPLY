import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';   
import auth from './auth';
import write, { writeSaga } from './write';

const rootReducer = combineReducers({
    auth,
    write,
});

export function* rootSaga() {
    yield all([writeSaga()]);    
}
export default rootReducer;