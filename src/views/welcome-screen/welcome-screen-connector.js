import {connect} from 'react-redux';
import { WelcomeScreen } from './welcome-screen';

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export const WelcomeScreenConnector = connect(mapStateToProps)(WelcomeScreen);
