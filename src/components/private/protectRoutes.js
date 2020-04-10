import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const protectRoutes = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem("myToken") ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{
                        pathname: '/',
                        state: { from: props.location }
                    }}
                    />
                )}
    />
);

export default protectRoutes