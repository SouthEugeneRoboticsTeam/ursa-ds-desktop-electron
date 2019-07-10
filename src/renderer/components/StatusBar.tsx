import { createElement } from 'react';
import Display from '@components/Display';
import { Grid, Box } from '@material-ui/core';
import WifiIcon from '@material-ui/icons/SignalWifi4Bar';
import RotationIcon from '@material-ui/icons/Rotate90DegreesCcw';
import VoltageIcon from '@material-ui/icons/BatteryChargingFull';

const StatusBar = () => (
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
);

export default StatusBar;
