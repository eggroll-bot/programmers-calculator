import React from "react";
import { MenuItem, Paper, Select, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

// TO-DO: Finish base selection dropdown menu.
// TO-DO: Finish converting from primary display (decimal) to the below bases. Secondary display should convert the last number it finds. BIN is unsigned binary with negative sign prepended if negative.

function SecondaryDisplay( props ) {
	return (
		<Paper square elevation={ 0 } style={ { textAlign: "left", width: props.width } }>
			<Typography style={ { fontFamily: "monospace", fontSize: "16px", height: props.height, overflowX: "auto", padding: "5px 15px" } }>
				BIN:&emsp;&emsp;&emsp;&emsp;&emsp;
			</Typography>

			<Typography style={ { fontFamily: "monospace", fontSize: "16px", height: props.height, overflowX: "auto", padding: "5px 15px" } }>
				1SC:&emsp;&emsp;&emsp;&emsp;&emsp;
			</Typography>

			<Typography style={ { fontFamily: "monospace", fontSize: "16px", height: props.height, overflowX: "auto", padding: "5px 15px" } }>
				2SC:&emsp;&emsp;&emsp;&emsp;&emsp;
			</Typography>

			<Typography style={ { fontFamily: "monospace", fontSize: "16px", height: props.height, overflowX: "auto", padding: "5px 15px" } }>
				HEX:&emsp;&emsp;&emsp;&emsp;&emsp;
			</Typography>

			<div style={ { padding: "5px 15px" } }>
				<Select value={ 0 }>
					<MenuItem value={ 0 }>None:</MenuItem>

					{
						Array.from( { length: 36 }, ( _, i ) => i + 1 ).map( ( item ) => (
							<MenuItem key={ item } value={ item }>Base { item }:</MenuItem>
						) )
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
