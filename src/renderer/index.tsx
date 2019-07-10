import { createElement } from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from '@renderer/app.tsx';
import theme from '@renderer/theme.ts'

render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('app')
);
