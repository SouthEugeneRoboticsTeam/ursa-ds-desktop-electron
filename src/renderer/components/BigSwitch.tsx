import { createElement } from 'react';
import { makeStyles } from '@material-ui/styles'
import { Box, Theme, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: theme.spacing(36),
        height: theme.spacing(12),
        margin: theme.spacing(1)
    },
    trueButton: {
        width: '50%',
        height: '100%',
        borderTopLeftRadius: theme.spacing(4),
        borderBottomLeftRadius: theme.spacing(4),
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        textColor: 'black'
    },
    falseButton: {
        width: '50%',
        height: '100%',
        borderTopRightRadius: theme.spacing(4),
        borderBottomRightRadius: theme.spacing(4),
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        textColor: 'black'
    },
}));

const BigSwitch = ({ value, trueAlias, falseAlias, trueColor, falseColor }: BigSwitchProps) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Button
                variant="contained"
                disabled={!value}
                className={classes.trueButton}
                style={{ backgroundColor: value ? trueColor : '#e3e3e3' }}
            >
                {trueAlias}
            </Button>
            <Button
                variant="contained"
                disabled={value}
                className={classes.falseButton}
                style={{ backgroundColor: value ? '#e3e3e3' : falseColor }}
            >
                {falseAlias}
            </Button>
        </Box>
    );
};

interface BigSwitchProps {
    value: boolean
    setState: (state: boolean) => void
    trueAlias: string
    falseAlias: string
    trueColor: string
    falseColor: string
}

export default BigSwitch
