import { createElement } from 'react';
import { makeStyles } from '@material-ui/styles'
import { Grid, Paper, Theme } from '@material-ui/core';
import StatusBar from '@components/StatusBar';

const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        padding: theme.spacing(1),
    }
}));

const App = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} sm={8}>
                <Paper className={classes.paper}>
                    <StatusBar />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default App;
