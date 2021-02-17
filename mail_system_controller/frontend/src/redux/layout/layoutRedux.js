export const actionTypes = {
    HideDefault: "HideDefault Layout",
    ShowDefault: "ShowDefault Layout"
}

export const actions = {
    hideDefault: () => ({type: actionTypes.HideDefault}),
    showDefault: () => ({type: actionTypes.ShowDefault})
}

const initAuthState = {
    isHideDefault: false
}

export const reducer = function(state = initAuthState, action) {
    switch(action.type) {
        case actionTypes.HideDefault: {
            return Object.assign({}, state, {isHideDefault: true})
        }
        case actionTypes.ShowDefault: {
            return Object.assign({}, state, {isHideDefault: false})
        }
        default:
            return state;
    }
}