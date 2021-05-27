import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga from '../lib/createRequestSaga';

const CHANGE_FIELD = 'user/CHANGE_FIELD';
const INITIALIZE_FORM = 'user/INITIALIZE_FORM'

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'user/LOGIN_FAILURE';

const LOGOUT = 'user/LOGOUT';
// 새로고침 이후 임시 로그인 처리
const TEMP_SET_USER = 'user/TEMP_SET_USER';
// 회원 정보 확인
/*
const CHECK = 'user/CHECK';
const CHECK_SUCCESS = 'user/CHECK_SUCCESS';
const CHECK_FAILURE = 'user/CHECK_FAILURE';
*/
export const changeField = createAction(CHANGE_FIELD,
    ({ key, value }) => ({ key, value })
);

export const initializeForm = createAction(INITIALIZE_FORM,
    form => form
)
export const login = createAction(LOGIN,
    ({ username, userId, token }) => ({ username, userId, token })    
);
export const tempSetUser = createAction(TEMP_SET_USER, user => user);
//export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
//const checkSaga = createRequestSaga(CHECK, authAPI.check);

export function* authSaga() {
    yield takeLatest(LOGIN, loginSaga);
}
/*
function checkFailureSaga() {   // 사용자 정보를 초기화
    try {
        localStorage.removeItem('user');    // localStorage 에서 user 제거
    } catch (e) {
        console.log('localStorage is not working');
    }
}
*/

function* logoutSaga() {
    try {
        yield call(authAPI.logout);
        localStorage.removeItem('user');
    } catch (e) {
        console.log(e);
    }
}

export function* userSaga() {
    //yield takeLatest(CHECK, checkSaga);
    //yield takeLatest(CHECK_FAILURE, checkFailureSaga);  // CHECK_FAILURE 액션이 발생할 때(createRequestSaga) checkFailureSaga() 호출
    yield takeLatest(LOGOUT, logoutSaga);   // HeaderContainer에서 LOGOUT 액션이 발생하면 ...
}

const initialState = {
    user: null,
    checkError: null,
};

const user = handleActions(
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
        [TEMP_SET_USER]: (state, { payload: user }) => ({
            ...state,
            user
        }),
        /*
        [CHECK_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
            checkError: null
        }),
        
        [CHECK_FAILURE]: (state, { payload: error }) => ({
            ...state,
            user,
            checkError: error
        }),
        */
        [LOGOUT]: state => ({
            ...state,
            user: null,
        }),
    },
    initialState
);

export default user;