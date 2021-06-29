import React from "react";
import { Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

// TO-DO: Implement keyboard keys 0-9 and functions for button presses.

function Numpad( props ) {
	return (
		<Grid container justify="center" style={ { height: props.height, width: props.width } }>
			{
				[ 7, 8, 9, 4, 5, 6, 1, 2, 3, 0 ].map( ( item ) =>
					(
						<Grid item key={ item } xs={ 4 }>
							<Button color="primary" disableFocusRipple={ true } style={ { fontSize: "32px", height: "100%", width: "100%" } }>
								{ item }
							</Button>
						</Grid>
					)
				)
			}
		</Grid>
	);
}

Numpad.propTypes = {
	height: PropTypes.string,
	width: PropTypes.string
};

export default Numpad;
