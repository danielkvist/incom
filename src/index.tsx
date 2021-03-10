import { FC, StrictMode, useMemo } from 'react';
import { render } from 'react-dom';
import {
	createMuiTheme,
	CssBaseline,
	ThemeProvider,
	useMediaQuery,
} from '@material-ui/core';
import App from './App';
import reportWebVitals from './reportWebVitals';

const ThemeWrapper: FC = ({ children }) => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: prefersDarkMode ? 'dark' : 'light',
				},
			}),
		[prefersDarkMode]
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

const root = document.getElementById('root');
render(
	<StrictMode>
		<ThemeWrapper>
			<App />
		</ThemeWrapper>
	</StrictMode>,
	root
);

reportWebVitals();
