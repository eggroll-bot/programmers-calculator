import React from "react";
import { Button, Grid } from "@material-ui/core";
import DisplayTextContext from "../contexts/display-text-context";
import PropTypes from "prop-types";

function ButtonPad( props ) {
	return (
		<Grid container justify="center" style={ { height: props.height, width: props.width } }>
			{
				props.operations.map( ( item ) =>
					(
						<Grid item key={ item.text } xs={ props.xs }>
							<DisplayTextContext.Consumer>
								{
									value =>
										(
											<Button color="primary"
												disableFocusRipple={ true }
												onClick={ ( ) => {
													item.onClick( value );
												} }
												style={ { fontSize: props.fontSize, height: "100%", width: "100%" } }>
												{ item.text }
											</Button>
										)
								}
							</DisplayTextContext.Consumer>
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
