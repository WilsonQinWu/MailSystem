import React, { Suspense } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { DashboardPage } from './app/Dashboard/';
import { SplashScreen } from './app/Layout';

export default function BasePage() {
    return (
        <Suspense fallback={SplashScreen}>
            <Switch>
                {
                    <Redirect exact from="/" to="/dashboard" />
                }
                <Route path="/dashboard" component={DashboardPage} />
                <Redirect to="/error" />
            </Switch>
        </Suspense>
    )
}