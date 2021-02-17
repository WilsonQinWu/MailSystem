import React from 'react';
import {Typography} from "@material-ui/core";
import {useSelector} from "react-redux";

export const DashboardPage = () => {
    const user = useSelector(state => state.auth.user)

    return <>
        <Typography component="p" variant="p">Welcome! {user.uid}.</Typography>
        <Typography component="h3" variant="h3">Hello World!</Typography>
    </>
}