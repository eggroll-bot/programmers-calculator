import React from "react";
import { Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

// TO-DO: Implement keyboard keys and functions for button presses.

function ButtonPad( props ) {
	return (
		<Grid container justify="center" style={ { height: props.height, width: props.width } }>
			{
				props.operations.map( ( item ) =>
					(
						<Grid item key={ item } xs={ props.xs }>
							<Button color="primary" disableFocusRipple={ true } style={ { fontSize: props.fontSize, height: "100%", width: "100%" } }>
								{ item }
							</Button>
						</Grid>
					)
				)
			}
		</Grid>
	);
}

ButtonPad.propTypes = {
	fontSize: PropTypes.string.isRequired,
	height: PropTypes.string,
	operations: PropTypes.array.isRequired,
	width: PropTypes.string,
	xs: PropTypes.number.isRequired
};

export default ButtonPad;
