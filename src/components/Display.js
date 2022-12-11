import React from "react";
import DisplayTextContext from "../contexts/display-text-context";
import { Paper, Typography } from "@mui/material";

function Display( ) {
	const [ displayText ] = React.useContext( DisplayTextContext );
	const displayParagraph = React.useRef( null );

	React.useLayoutEffect( ( ) => {
		displayParagraph.current.scrollLeft = displayParagraph.current.scrollWidth; // Scroll to end.
	}, [ displayText ] );

	return (
		<Paper square elevation={ 0 } style={ { padding: "0px 16px", textAlign: "right" } }>
			<Typography ref={ displayParagraph } style={ { fontSize: "36px", overflowX: "scroll", whiteSpace: "nowrap" } }>
				{ displayText }
			</Typography>
		</Paper>
	);
}

export default Display;
