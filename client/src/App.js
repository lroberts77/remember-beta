import React from "react";
import { Container, AppBar, Typography, grow, Grid } from '@material-ui/core';

const App = () => {
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">
                    Remeber-Beta
                </Typography>

            </AppBar>
        </Container>
    );
};

export default App;