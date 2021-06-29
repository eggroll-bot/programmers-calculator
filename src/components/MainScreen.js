import React from "react";
import Display from "./Display";
import Numpad from "./Numpad";

function MainScreen( ) {
	return (
		<>
			<Display text="0" />
			<Numpad height="300px" width="300px" />
		</>
	);
}

export default MainScreen;
