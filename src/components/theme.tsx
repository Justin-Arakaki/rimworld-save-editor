import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 500,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
	palette: {
		primary: {
			main: '#ab61d5',
		},
		secondary: {
			main: '#76e0e6',
		},
		text: {
			primary: '#d9dbe7',
			secondary: '#6b6d7f',
		},
		background: {
			paper: '#282a3c',
			default: '#1b1c27',
		},
	},
	typography: {
		fontFamily: 'Lato',
		button: {
			fontWeight: 400,
			fontSize: '1.125rem',
			textTransform: 'none',
		},
		h1: {
			fontWeight: 500,
			fontSize: '3.125rem',
		},
		h2: {
			fontWeight: 'bolder',
			fontSize: '1.625rem',
		},
		h3: {
			fontWeight: 400,
			fontSize: '1.175rem',
		},
		h4: {
			fontWeight: 400,
			fontSize: '1.175rem',
		},
		body1: {
			fontWeight: 400,
			fontSize: '1rem',
		},
		body2: {
			fontWeight: 400,
			fontSize: '1rem',
		},
	},
});

export default customTheme;
