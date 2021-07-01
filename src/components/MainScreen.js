import React from "react";
import Display from "./Display";
import SecondaryDisplay from "./SecondaryDisplay";
import ButtonPad from "./ButtonPad";
import { Grid } from "@material-ui/core";

class MainScreen extends React.Component {
	constructor( ) {
		super( );
		this.state = { displayText: "0" };
	}

	render( ) {
		return (
			<>
				<Display text={ this.state.displayText } />
				<SecondaryDisplay primaryDisplayText={ this.state.displayText } />

				<Grid container>
					<Grid item>
						<ButtonPad
							fontSize="24px"
							height="275px"
							operations={ [ "SLL", "SRL", "SRA", "+/-", "ROL", "ROR", "NOT", "AND", "1SC", "2SC", "OR", "XOR" ] }
							width="300px"
							xs={ 3 } />
					</Grid>

					<Grid item>
						<ButtonPad
							fontSize="24px"
							height="275px"
							operations={ [ 7, 8, 9, 4, 5, 6, 1, 2, 3, 0 ] }
							width="250px"
							xs={ 4 } />
					</Grid>

					<Grid item>
						<ButtonPad
							fontSize="24px"
							height="275px"
							operations={ [ "/", "*", "-", "+", "=" ] }
							width="75px"
							xs={ 12 } />
					</Grid>
				</Grid>
			</>
		);
	}
}

export default MainScreen;
