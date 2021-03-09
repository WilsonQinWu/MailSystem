import React, { useState } from 'react';
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { MAIL_COLUMN_TO_LABEL } from './helper'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    file_name: {
        marginLeft: theme.spacing(3),
    },
    input: {
        display: 'none',
    },

    mail_input_field: {
        margin: theme.spacing(1),
        marginTop: theme.spacing(3),
        width: '25ch',
    }
}));

export default function CreateMailItem() {
    const [open, setOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [mailItem, setMailItem] = useState({})
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUploadFile = async (e) => {
        const file = e.target.files[0]
        console.log(e.target.files[0]);
        setSelectedFile(file);

        const parsedData = await parseFile(file);
        setMailItem(parsedData)
    }


    const parseFile = () => {
        // TODO: upload to backend and return populated data 
        return {
            file_path: 'https://mystorage.xxx.pdf',
            mail_addressed_to: 'test',
            legal_entity_name: 'name',
            description: 'des',
            entry_date: new Date(),
            fromInstitution: 'CRA',
            account_number: '123312',
            document_date: new Date()
        }
    }

    const handleMailItemChange = (value, field) => {
        const newMailItem = Object.assign({}, mailItem);
        newMailItem[field] = value
        setMailItem(newMailItem)
    }

    const handleCreate = () => {
        // create 
        axios.post('/')
        setOpen(false);
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}>
                New item
            </Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth='md' fullWidth>
                <DialogTitle id="form-dialog-title">New Item</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                type="file"
                                onChange={handleUploadFile}
                            />
                            <label htmlFor="contained-button-file">
                                <Button
                                    variant="contained"
                                    color="primary" component="span"
                                    startIcon={<AddCircleOutlineIcon />}
                                >
                                    Upload File</Button>

                            </label>

                            <span className={classes.file_name}>{selectedFile && selectedFile.name}</span>
                        </div>
                    </DialogContentText>
                    <form>
                        <div>
                            {
                                ['mail_addressed_to', 'legal_entity_name', "account_number","description", 
                                'CLD', 'suffix', 'tax_year' ].map(colName => (
                                    <TextField
                                        className={classes.mail_input_field}
                                        margin="dense"
                                        id={colName}
                                        label={MAIL_COLUMN_TO_LABEL[colName]}
                                        value={mailItem[colName]}
                                        onChange={(e) => handleMailItemChange(e.target.value, colName)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                ))
                            }


                        </div>

                        <div>
                            <TextField
                                className={classes.mail_input_field}
                                margin="dense"
                                id="document_date"
                                label="Document Date"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <TextField
                                className={classes.mail_input_field}
                                margin="dense"
                                id="document_date"
                                label="Entry Date"
                                // value={entry_date}
                                type="date"
                                defaultValue={new Date().toISOString().split('T')[0]}
                                disabled
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>

                        <div>
                            <TextField
                                className={classes.mail_input_field}
                                margin="dense"
                                id="document_date"
                                label="Mail Recipients"
                                value={mailItem.entry_date}

                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </form>

                </DialogContent>
                <DialogActions lo>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>

                    <Button onClick={handleCreate} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
