import { Redirect, Switch, Route } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import ErrorPage from './app/Error/';
import { Layout } from './app/Layout/';
import { AuthPage } from './app/Auth/';
import BasePage from './BasePage';
import React from "react";

export default function Routes() {
    const {isAuthorized} = useSelector((state) => ({isAuthorized: state.auth.user ? true : false}), shallowEqual);

    return (
        <Switch>
            {!isAuthorized ? (
                <>
                <Redirect to="/auth/login"/>
                <Route>
                    <AuthPage />
                </Route>
                </>
            ) : (
                <Redirect from="/auth" to="/"/>
            ) }

            <Route path="/error" component={ErrorPage} />
            {/* <Route path="/logout" component={} /> */}

            {!isAuthorized ? (
                <BasePage />
            ) : (
                <Layout>
                    <BasePage />
                </Layout>
            )}
        </Switch>
    )
}