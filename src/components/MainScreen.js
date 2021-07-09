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
		<div style={ { display: "flex", flexDirection: "column", height: "100vh" } }>
			<DisplayTextContext.Provider value={ [ displayText, setDisplayText ] }>
				<Display />
				<SecondaryDisplay />

				<div style={ { flex: 1, padding: "30px" } }>
					<Grid container justifyContent="center" spacing={ 3 } style={ { alignItems: "center", height: "100%" } }>
						<Grid item>
							<ButtonPad fontSize="24px" height="275px" operations={ advancedOperationPad } width="300px" xs={ 4 } />
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
		</div>
	);
}

export default MainScreen;
