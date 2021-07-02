import React from "react";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MainScreen from "./components/MainScreen";

const lightTheme = createMuiTheme( {
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
		type: "light"
	}
} );

const darkTheme = createMuiTheme( {
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
		type: "dark"
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
		<MuiThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
			<CssBaseline />
			<MainScreen />
		</MuiThemeProvider>
	);
}

export default App;
