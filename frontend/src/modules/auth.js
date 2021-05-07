import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';
import { takeLatest } from 'redux-saga/effects'; 

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

export const changeField = createAction(CHANGE_FIELD,
    ({ key, value }) => ({ key, value })
);

export const initializeForm = createAction(INITIALIZE_FORM,
    form => form
)
export const login = createAction(LOGIN,
    ({ username, userId, token }) => ({ username, userId, token })    
);

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
    yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
    login: {
        username: '',
        userId: '',
        token: '',
    },
    auth: null,
    authError: null,
};

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,   
        }),
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form]
        }),
        [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            auth
        }),
        [LOGIN_FAILURE]: (state, { payload: error}) => ({
            ...state,
            authError: error
        }),
        
    },
    initialState
);

export default auth;