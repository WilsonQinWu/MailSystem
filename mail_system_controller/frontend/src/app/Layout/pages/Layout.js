import React from 'react';
import { useSelector } from 'react-redux'
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Grid} from "@material-ui/core";

export const Layout = ({children}) => {
    const isHideDefault = useSelector((state) => state.layout.isHideDefault)

    if(!isHideDefault) {
        return <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Header />
            </Grid>

            <Grid item xs={12} align="center">
                {children}
            </Grid>

            <Grid item xs={12} align="center">
                <Footer />
            </Grid>
        </Grid>
    } else {
        return <>
            {children}
        </>
    }
}