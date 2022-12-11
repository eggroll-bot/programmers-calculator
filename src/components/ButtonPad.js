import React from "react";
import DisplayTextContext from "../contexts/display-text-context";
import { Button, Grid } from "@mui/material";
import PropTypes from "prop-types";

function ButtonPad( props ) {
	const [ displayText, setDisplayText ] = React.useContext( DisplayTextContext );

	return (
		<Grid container justifyContent="center" style={ { height: props.height, width: props.width } }>
			{
				[ ...props.operations.entries( ) ].map( ( [ operation, { onClick } ] ) => (
					<Grid item key={ operation } xs={ props.xs }>
						<Button color="primary"
							disableFocusRipple={ true }
							onClick={ ( ) => {
								onClick( operation, displayText, setDisplayText );
							} }
							style={ { fontSize: props.fontSize, height: "100%", width: "100%" } }>
							{ operation }
						</Button>
					</Grid>
				) )
			}
		</Grid>
	);
}

ButtonPad.propTypes = {
	fontSize: PropTypes.string.isRequired,
	height: PropTypes.string,
	operations: PropTypes.object.isRequired,
	width: PropTypes.string,
	xs: PropTypes.number.isRequired
};

export default ButtonPad;
