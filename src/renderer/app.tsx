import { createElement } from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import { Grid, Paper, Box, Theme } from '@material-ui/core';
import WifiIcon from '@material-ui/icons/SignalWifi4Bar';
import RotationIcon from '@material-ui/icons/Rotate90DegreesCcw';
import VoltageIcon from '@material-ui/icons/BatteryChargingFull';
import Display from '@components/Display';

const styles = (theme: Theme) => createStyles({
    paper: {
        padding: theme.spacing(1),
    }
});

const App = ({ classes }: WithStyles<typeof styles>) => (
    <Grid container>
        <Grid item xs={8}>
            <Paper className={classes.paper}>
                <Grid container>
                    <Grid item xs={4}>
                        <Box display="flex" justifyContent="center">
                            <Display label="wifi" color="#83d697" Icon={WifiIcon} />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box display="flex" justifyContent="center">
                            <Display label="rotation" color="#e5849d" Icon={RotationIcon} />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box display="flex" justifyContent="center">
                            <Display label="voltage" color="#fffe66" Icon={VoltageIcon} />
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
);

export default withStyles(styles)(App);
