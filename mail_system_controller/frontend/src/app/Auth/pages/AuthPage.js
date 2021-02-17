import React from 'react';
import {Route} from 'react-router-dom';
import AuthLoginWidget from '../components/AuthLoginWidget';
import {Grid} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import Link from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export function AuthPage() {

    return <Grid container spacing={1}>
        <Grid item xs={12} align="center">
            <div>Hello World!</div>
        </Grid>
        <Grid item xs={12} align="center">
            <switch>
                <Route path="/auth/login" component={AuthLoginWidget} />
            </switch>
        </Grid>
        <Grid item xs={12} align="center">
            <Typography component="p" variant="p">Copyright© 2021 Team ROBOT</Typography>
        </Grid>
    </Grid>
}