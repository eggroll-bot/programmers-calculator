import React from "react";
import DisplayTextContext from "../contexts/display-text-context";
import { Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

function ButtonPad( props ) {
	const [ displayText, setDisplayText ] = React.useContext( DisplayTextContext );

	return (
		<Grid container justify="center" style={ { height: props.height, width: props.width } }>
			{
				props.operations.map( ( item ) => (
					<Grid item key={ item.text } xs={ props.xs }>
						<Button color="primary"
							disableFocusRipple={ true }
							onClick={ ( ) => {
								item.onClick( item.text, displayText, setDisplayText );
							} }
							style={ { fontSize: props.fontSize, height: "100%", width: "100%" } }>
							{ item.text }
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
	operations: PropTypes.array.isRequired,
	width: PropTypes.string,
	xs: PropTypes.number.isRequired
};

export default ButtonPad;
