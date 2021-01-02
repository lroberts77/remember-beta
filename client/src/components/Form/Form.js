import React, { useState } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

const Form = () => {
    const [postData, setPostData] = useState({
        creator:"", title:"", message:"", tags:"", selectedFile:""
    })
    const classes = useStyles();

    const handleSubmit = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a memory</Typography>
                <TextField name="creator" 
                variant={'outlined'} 
                label="Creator"
                fullWidth
                value={postData.creator}
                onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField name="title" 
                variant={'outlined'} 
                label="title"
                fullWidth
                value={postData.creator}
                onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField name="message" 
                variant={'outlined'} 
                label="message"
                fullWidth
                value={postData.creator}
                onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField name="tags" 
                variant={'outlined'} 
                label="tags"
                fullWidth
                value={postData.creator}
                onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
            </form>

        </Paper>
    );
}

export default Form;