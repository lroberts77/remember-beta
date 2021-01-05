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
            <CardMedia className={classes.media} image={postMessage.selectedFile} title={postMessage.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.Typography.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>

            </div>
        </Card>
    );
}

export default Post;