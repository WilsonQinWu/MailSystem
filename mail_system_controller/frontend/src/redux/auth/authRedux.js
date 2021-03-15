import { put, takeLatest } from 'redux-saga/effects';
import { persistReducer } from 'redux-persist';
import { login } from "./authCrud";
import storage from 'redux-persist/lib/storage';

export const actionTypes = {
    Login: 'Login Act',
    Logout: 'Logout Act',
    Register: 'Register Act',
    UserLoaded: 'UserLoaded'
}

export const actions = {
    login: (payload) => ({type: actionTypes.Login, payload}),
    logout: () => ({type: actionTypes.Logout}),
    fulfillUser: (user) => ({type: actionTypes.UserLoaded, payload})
}

const initAuthState = {
    user: undefined
}

export const reducer = persistReducer(
    { storage, key: "auth", whitelist: ["user"]},
    (state = initAuthState, action) => {
        switch(action.type) {
            case actionTypes.Login: {
                return Object.assign({}, state, {user: action.payload})
            }
            case actionTypes.Logout: {
                return Object.assign({}, state, {user: undefined} )
            }
            case actionTypes.UserLoaded: {
                return Object.assign({}, state, {user: action.payload})
            }
            default:
                return state;
        }
    }
)

export function* saga() {
    yield takeLatest(actionTypes.Login, function* loginSaga({payload}) {
        const user = login(payload.uid, payload.password);
        if (user) {
            yield put(actions.fulfillUser(user));
        }
    });
}
