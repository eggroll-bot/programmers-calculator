import React from "react";
import DisplayTextContext from "../contexts/display-text-context";
import { Paper, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

function Display( props ) {
	const [ displayText ] = React.useContext( DisplayTextContext );
	const displayParagraph = React.useRef( null );

	React.useLayoutEffect( ( ) => {
		displayParagraph.current.scrollLeft = displayParagraph.current.scrollWidth;
	}, [ displayText ] );

	return (
		<Paper square elevation={ 0 } style={ { textAlign: "right", width: props.width } }>
			<Typography ref={ displayParagraph } style={ { fontSize: "36px", height: props.height, overflowX: "scroll", padding: "5px 15px", whiteSpace: "nowrap" } }>
				{ displayText }
			</Typography>
		</Paper>
	);
}

Display.propTypes = {
	height: PropTypes.string,
	width: PropTypes.string
};

export default Display;
