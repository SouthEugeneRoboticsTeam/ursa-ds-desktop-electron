import { createElement } from 'react';
import { createStyles, WithStyles, withStyles, Box, Theme, Typography } from '@material-ui/core';
import { SvgIconComponent } from '@material-ui/icons'

const styles = (theme: Theme) => createStyles({
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
});

const Display = ({ classes, label, color, Icon }: ValueDisplayProps) => (
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

interface ValueDisplayProps extends WithStyles<typeof styles> {
    label: string
    color: string
    Icon: SvgIconComponent
}

export default withStyles(styles)(Display);
