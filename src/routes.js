import React from "react";
import Layout from "./Hoc/Layout";
import { Switch, Route } from "react-router-dom";

//authRoutes
import PrivateRoute from "./Components/authRoutes/privateRoutes";
import PublicRoute from "./Components/authRoutes/publicRoutes";

import Home from "./Components/home";
import SignIn from "./Components/signin";

//signin page
import Dashboard from "./Components/admin/Dashboard";

import AdminMatches from "./Components/admin/matches";

//<Route exact component={Home} path="/" /> means home page

const Routes = props => {
    //console.log(props) --> to check if we have a user or not
    return (
        <Layout>
            <Switch>
                <PrivateRoute
                    {...props}
                    path="/admin_matches"
                    exact
                    component={AdminMatches}
                />
                <PrivateRoute
                    {...props}
                    path="/dashboard"
                    exact
                    component={Dashboard}
                />
                <PublicRoute
                    {...props}
                    restricted={true}
                    path="/sign_in"
                    exact
                    component={SignIn}
                />
                <PublicRoute
                    {...props}
                    restricted={false}
                    path="/"
                    exact
                    component={Home}
                />
            </Switch>
        </Layout>
    );
};

export default Routes;
