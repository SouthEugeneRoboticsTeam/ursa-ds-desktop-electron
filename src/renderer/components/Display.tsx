import { createElement } from 'react';
import { Box, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SvgIconComponent } from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: theme.spacing(12),
        margin: theme.spacing(1)
    },
    iconBox: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        borderRadius: theme.spacing(4)
    },
    label: {
        textAlign: 'center'
    }
}));

const Display = ({ label, color, Icon }: ValueDisplayProps) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box
                className={classes.iconBox}
                style={{ backgroundColor: color }}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Icon fontSize="large" />
            </Box>
            <Typography variant="caption" component="p" className={classes.label}>
                {label}
            </Typography>
        </Box>
    );
};

interface ValueDisplayProps {
    label: string
    color: string
    Icon: SvgIconComponent
}

export default Display;
