import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { allActions } from '../../../redux';

export default function AuthLogOutWidget() {
    const dispatch = useDispatch();

    return <>
        <Button color="warning" variant="contained" onClick={() => dispatch(allActions.logout())}>Log Out</Button>
    </>
}