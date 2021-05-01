import { createAction, handleActions } from 'redux-actions';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'

export const changeField = createAction(
    CHANGE_FIELD,
    ({ key, value }) => ({ key, value })
);

export const initializeForm = createAction(
    INITIALIZE_FORM,
    user => user
)

const initialState = {
    user: {
        userid: '',
        username: '',
        token: '',
    }
};

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,   
        }),
        [INITIALIZE_FORM]: (state, { payload: user }) => ({
            ...state,
            [user]: initialState[user]
        })
        
    },
    initialState
);

export default auth;