import { handleActions, createAction } from 'redux-actions';

const INITIALIZE = 'main/INITIALIZE';
const CHANGE_FIELD = 'main/CHANGE_FIELD'

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }));   

const initialState = {
    search: {
        searchType: '',
        searchKeyword: ''
    }
};

const main = handleActions(
    {
        [INITIALIZE]: state => initialState,

        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,   
        }),
    },
    initialState
);

export default main;