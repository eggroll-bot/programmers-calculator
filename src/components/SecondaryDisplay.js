import React from "react";
import { MenuItem, Paper, Select, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

// TO-DO: Finish base selection dropdown menu.
// TO-DO: Finish converting from primary display (decimal) to the below bases.

function SecondaryDisplay( props ) {
	return (
		<Paper square elevation={ 0 } style={ { textAlign: "left", width: props.width } }>
			<Typography style={ { fontSize: "16px", height: props.height, overflowX: "auto", padding: "5px 15px" } }>
				Bin:
			</Typography>

			<Typography style={ { fontSize: "16px", height: props.height, overflowX: "auto", padding: "5px 15px" } }>
				Hex:
			</Typography>

			<Typography style={ { fontSize: "16px", height: props.height, overflowX: "auto", padding: "5px 15px" } }>
				Oct:
			</Typography>

			<div style={ { padding: "5px 15px" } }>
				<Select value={ 0 }>
					<MenuItem value={ 0 }>None:</MenuItem>

					{
						Array.from( { length: 36 }, ( _, i ) => i + 1 ).map( ( item ) =>
							(
								<MenuItem key={ item } value={ item }>Base { item }:</MenuItem>
							)
						)
					}
				</Select>
			</div>
		</Paper>
	);
}

SecondaryDisplay.propTypes = {
	height: PropTypes.string,
	width: PropTypes.string
};

export default SecondaryDisplay;
