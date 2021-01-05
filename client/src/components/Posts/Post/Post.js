import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@materila-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';



const Post = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia />
        </Card>
    );
}

export default Post;