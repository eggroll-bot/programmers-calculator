import React from "react";
import Display from "./Display";
import Numpad from "./Numpad";

class MainScreen extends React.Component {
	constructor( ) {
		super( );
		this.state = { displayText: "0" };
	}

	render( ) {
		return (
			<>
				<Display text={ this.state.displayText } />
				<Numpad height="300px" width="300px" />
			</>
		);
	}
}

export default MainScreen;
