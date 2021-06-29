import React from "react";
import { Paper, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

function Display( props ) {
	return (
		<Paper square elevation={ 0 } style={ { textAlign: "right" } }>
			<Typography style={ { height: props.height, fontSize: "36px", padding: "5px 15px", width: props.width } }>
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
