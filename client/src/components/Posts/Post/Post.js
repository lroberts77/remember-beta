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
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)} </Typography> 
                <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>   
                </CardContent>
                <CardActions className={classes.cardActions}>

                </CardActions>
            </div>
        </Card>
    );
}

export default Post;