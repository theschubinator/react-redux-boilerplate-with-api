import React from 'react';
import { Link } from 'react-router-dom';

export const Home = (props) => {
    return (
        <>
            <h1>
                This is the Home Page served with React Router.
            </h1>
            <h3>Available Routes:</h3>
            <ul>
                <li>
                    <Link to="/welcome">Welcome Page</Link>
                </li>
            </ul>
        </>
    )
};
