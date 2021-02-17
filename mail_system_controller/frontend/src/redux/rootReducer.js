import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';

import * as auth from './auth/authRedux';
import * as layout from './layout/layoutRedux';

export const rootReducer = combineReducers({
    auth: auth.reducer,
    layout: layout.reducer
})

export function* rootSaga() {
    yield all([auth.saga()])
}