import React, { Suspense } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { DashboardPage } from './app/Dashboard/';
import { SplashScreen } from './app/Layout';
import MailDash from './app/MainPage/MailDash';
export default function BasePage() {
    return (
        <Suspense fallback={SplashScreen}>
            <Switch>
                {/* {
                    <Redirect exact from="/" to="/dashboard" />
                } */}
                <Route path='/' exact component={MailDash}/>
                <Route path="/dashboard" component={DashboardPage} />
                <Redirect to="/error" />
            </Switch>
        </Suspense>
    )
}