import { createElement } from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles'
import { Box, Theme, Button } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
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
});

const BigSwitch = ({ classes, value, trueAlias, falseAlias, trueColor, falseColor }: BigSwitchProps) => (
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

interface BigSwitchProps extends WithStyles<typeof styles> {
    value: boolean
    setState: (state: boolean) => void
    trueAlias: string
    falseAlias: string
    trueColor: string
    falseColor: string
}

export default withStyles(styles)(BigSwitch)
