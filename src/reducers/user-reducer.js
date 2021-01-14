import * as types from '../actions/user'

const storeUser = (state, action) => {
    return action.user;
}

export const userReducer = (state = null, action) => {
    const actionsHandler = {
        [types.STORE_USER]: storeUser,
    };

    const reducer = actionsHandler[action.type];

    return reducer ? reducer(state, action) : state;
}
