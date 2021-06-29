import React from "react";
import { Paper, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

// TO-DO: Stylize horizontal scrollbar better.

function Display( props ) {
	return (
		<Paper square elevation={ 0 } style={ { textAlign: "right", width: props.width } }>
			<Typography style={ { fontSize: "36px", height: props.height, overflowX: "auto", padding: "5px 15px" } }>
				{ props.text }
			</Typography>
		</Paper>
	);
}

Display.propTypes = {
	height: PropTypes.string,
	text: PropTypes.string.isRequired,
	width: PropTypes.string
};

export default Display;
