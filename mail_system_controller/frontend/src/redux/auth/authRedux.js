import { put, takeLatest } from 'redux-saga/effects';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const actionTypes = {
    Login: 'Login Act',
    Logout: 'Logout Act',
    Register: 'Register Act'
}

export const actions = {
    login: (payload) => ({type: actionTypes.Login, payload}),
    logout: () => ({type: actionTypes.Logout})
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
            default:
                return state;
        }
    }
)

export function* saga() {
    // yield takeLatest(actionTypes.Login, function* loginSaga({payload}) {
    //     yield put(actions.Register);
    // });
}