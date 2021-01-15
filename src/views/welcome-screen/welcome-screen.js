import React from 'react'
import PropTypes from 'prop-types';

export const WelcomeScreen = (props) => {
    return (
        <h1>
            {
                `Welcome ${props.user.firstName} ${props.user.lastName} to our React Application!`
            }
        </h1>
    )
};

WelcomeScreen.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired
    }).isRequired
}
