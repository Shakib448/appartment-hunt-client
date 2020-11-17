import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          loggedIn.email || loggedIn.name ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
