import { createElement } from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import { Grid, Paper, Theme } from '@material-ui/core';
import StatusBar from '@components/StatusBar';

const styles = (theme: Theme) => createStyles({
    paper: {
        padding: theme.spacing(1),
    }
});

const App = ({ classes }: WithStyles<typeof styles>) => (
    <Grid container>
        <Grid item xs={12} sm={8} lg={4} xl={2} >
            <Paper className={classes.paper}>
                <StatusBar />
            </Paper>
        </Grid>
    </Grid>
);

export default withStyles(styles)(App);
