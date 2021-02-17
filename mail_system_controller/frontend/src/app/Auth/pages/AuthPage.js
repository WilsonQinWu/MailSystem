import React from 'react';
import {Route} from 'react-router-dom';
import AuthLoginWidget from '../components/AuthLoginWidget';
import {Grid} from "@material-ui/core";
import Footer from "../../Layout/components/Footer";
import Typography from "@material-ui/core/Typography";

export function AuthPage() {

    return <Grid container spacing={1}>
        <Grid item xs={12} align="center">
            <Typography component="h4" variant="h4">mail_system_login_page</Typography>
        </Grid>
        <Grid item xs={12} align="center">
            <switch>
                <Route path="/auth/login" component={AuthLoginWidget} />
            </switch>
        </Grid>
        <Grid item xs={12} align="center">
            <Footer /> {/* todo: temp use, delete after development starts. */}
        </Grid>
    </Grid>
}