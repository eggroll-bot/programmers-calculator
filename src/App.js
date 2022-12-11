import "@fontsource/roboto";
import "@fontsource/roboto-mono";

import React from "react";
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import MainScreen from "./components/MainScreen";

const lightTheme = createTheme( {
	palette: {
		background: {
			default: "#DDDDDD",
			paper: "#CCCCCC"
		},
		primary: {
			main: "#000000"
		},
		secondary: {
			main: "#FF9B48"
		},
		mode: "light"
	}
} );

const darkTheme = createTheme( {
	palette: {
		background: {
			default: "#202020",
			paper: "#2E2E2E"
		},
		primary: {
			main: "#FFFFFF"
		},
		secondary: {
			main: "#FF9B48"
		},
		mode: "dark"
	}
} );

function App( ) {
	const [ darkMode, setDarkMode ] = React.useState( false );

	React.useEffect( ( ) => {
		const mql = window.matchMedia( "(prefers-color-scheme: dark)" );
		setDarkMode( mql.matches );

		mql.addEventListener( "change", ( e ) => {
			setDarkMode( e.matches );
		} );
	}, [ ] );

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
				<CssBaseline />
				<MainScreen />
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

export default App;
