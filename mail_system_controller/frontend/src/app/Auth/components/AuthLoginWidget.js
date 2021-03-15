import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { allActions } from '../../../redux';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

export default function AuthLoginWidget() {
    const dispatch = useDispatch();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleUsername(event) {
        setUsername(event.target.value);
    }

    return <Grid container spacing={1} direction={"column"}>
        <Grid item align="center">
            <FormControl>
                <TextField
                    required={true}
                    type="text"
                    value={username}
                    onChange={handleUsername}
                    inputProps={{
                        style: {textAlign: "center"}
                    }}
                />
                <FormHelperText>
                    <div align="center">User Name</div>
                </FormHelperText>
            </FormControl>
            <FormControl>
                <TextField
                    required={true}
                    type="text"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    inputProps={{
                        style: {textAlign: "center"}
                    }}
                />
                <FormHelperText>
                    <div align="center">Password</div>
                </FormHelperText>
            </FormControl>
        </Grid>
        <Grid item align="center"><Button onClick={() => {
            dispatch(allActions.login({username, password}));
        }}>Login</Button></Grid>
    </Grid>
}
