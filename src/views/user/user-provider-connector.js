import {connect} from 'react-redux';
import {storeUser} from '../../action-creators/user';
import {UserProvider} from './user-provider';

const mapStateToProps = (state) => {
    return {
        isUserLoaded: Boolean(state.user)
    }
}

export const UserProviderConnector = connect(mapStateToProps, {
    storeUser
})(UserProvider);
