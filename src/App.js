import React from "react";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Numpad from "./components/Numpad";

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

class App extends React.Component {
	constructor( ) {
		super( );
		this.state = { darkMode: false };
	}

	componentDidMount( ) {
		const mql = window.matchMedia( "(prefers-color-scheme: dark)" );
		this.setState( { darkMode: mql.matches } );

		mql.addEventListener( "change", ( e ) => {
			this.setState( { darkMode: e.matches } );
		} );
	}

	render( ) {
		return (
			<MuiThemeProvider theme={ this.state.darkMode ? darkTheme : lightTheme }>
				<CssBaseline />
				<Numpad />
			</MuiThemeProvider>
		);
	}
}

export default App;
