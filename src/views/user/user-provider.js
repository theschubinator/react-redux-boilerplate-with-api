import {useEffect} from 'react'
import PropTypes from 'prop-types';

export const UserProvider = (props) => {

    const {storeUser} = props;

    useEffect(() => {
        storeUser()
    }, [storeUser])


    return props.isUserLoaded ? props.children : null;

};

UserProvider.propTypes = {
    isUserLoaded: PropTypes.bool.isRequired,
    storeUser: PropTypes.func.isRequired
}
