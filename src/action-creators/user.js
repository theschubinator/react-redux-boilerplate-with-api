import {getUser} from '../repositories/current-user'
import * as actions from '../actions/user';

export const storeUser = () => async (dispatch) => {
    const user = await getUser()

    return dispatch({
        type: actions.STORE_USER,
        user
    })
}
