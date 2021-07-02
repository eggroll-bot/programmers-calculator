import React from "react";
import { Paper, Typography } from "@material-ui/core";
import DisplayTextContext from "../contexts/display-text-context";
import PropTypes from "prop-types";

// TO-DO: Stylize horizontal scrollbar better.

function Display( props ) {
	return (
		<Paper square elevation={ 0 } style={ { textAlign: "right", width: props.width } }>
			<Typography style={ { fontSize: "36px", height: props.height, overflowX: "auto", padding: "5px 15px" } }>
				<DisplayTextContext.Consumer>
					{ value => value }
				</DisplayTextContext.Consumer>
			</Typography>
		</Paper>
	);
}

Display.propTypes = {
	height: PropTypes.string,
	width: PropTypes.string
};

export default Display;
