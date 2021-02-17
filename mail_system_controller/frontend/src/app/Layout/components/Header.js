import React from 'react';
import {Typography} from "@material-ui/core";
import AuthLogOutWidget from "../../Auth/components/AuthLogOutWidget";
import Grid from "@material-ui/core/Grid";

export default function Header() {
    return <Grid container spacing={1} direction="row" justify={"center"}>
        <Grid item xs={4} align="center">
            <Typography component="h4" variant="h4">Header Section</Typography>
        </Grid>
        <Grid item xs={4} align="center">
            <AuthLogOutWidget />
        </Grid>
    </Grid>;
}