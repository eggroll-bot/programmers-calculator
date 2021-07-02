import React from "react";
import DisplayTextContext from "../contexts/display-text-context";
import Display from "./Display";
import SecondaryDisplay from "./SecondaryDisplay";
import { Grid } from "@material-ui/core";
import ButtonPad from "./ButtonPad";
import advancedOperationPad from "../util/advanced-operation-pad";
import numpad from "../util/numpad";
import basicOperationPad from "../util/basic-operation-pad";

function MainScreen( ) {
	const [ displayText, setDisplayText ] = React.useState( "0" );

	return (
		<DisplayTextContext.Provider value={ [ displayText, setDisplayText ] }>
			<Display />
			<SecondaryDisplay />

			<div style={ { padding: 15 } }>
				<Grid container justify="center" spacing={ 3 }>
					<Grid item>
						<ButtonPad fontSize="24px" height="275px" operations={ advancedOperationPad } width="300px" xs={ 3 } />
					</Grid>

					<Grid item>
						<ButtonPad fontSize="24px" height="275px" operations={ numpad } width="250px" xs={ 4 } />
					</Grid>

					<Grid item>
						<ButtonPad fontSize="24px" height="275px" operations={ basicOperationPad } width="75px" xs={ 12 } />
					</Grid>
				</Grid>
			</div>
		</DisplayTextContext.Provider>
	);
}

export default MainScreen;
