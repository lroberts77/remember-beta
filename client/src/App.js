import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import remember from "./images/remember.jpg";
import Posts from "./components/Posts/Posts";



const App = () => {
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">
                    Remeber-Beta
                </Typography>
                <img src={remember} alt="Remember-Beta"  />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;