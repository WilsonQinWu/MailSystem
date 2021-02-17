import React from 'react';
import {Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
    footer: {
        position:"absolute",
        left:0,
        bottom:0,
        right:0,
        paddingBottom: "1.7rem"
    }
});

export default function Footer() {
    const classes = useStyle();

    return <div className={classes.footer}>
        <Typography component="p" variant="p">Copyright© 2021 Team ROBOT</Typography>
    </div>;
}