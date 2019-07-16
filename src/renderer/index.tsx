import { createElement } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import App from '@renderer/app.tsx';
import theme from '@renderer/theme.ts'
import { CssBaseline } from '@material-ui/core';

render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.getElementById('app')
);
