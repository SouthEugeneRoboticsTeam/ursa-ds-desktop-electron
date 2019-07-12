import { createElement } from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from '@renderer/app.tsx';
import theme from '@renderer/theme.ts'
import { CssBaseline } from '@material-ui/core';

render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </MuiThemeProvider>,
    document.getElementById('app')
);
