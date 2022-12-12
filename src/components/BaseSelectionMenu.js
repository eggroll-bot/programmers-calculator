import React from "react";
import { MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";

function BaseSelectionMenu( props ) {
	return (
		<Select
			onChange={ ( e ) => props.setBase( e.target.value ) }
			sx={ {
				fontFamily: "Roboto Mono",
				margin: "0px 18px 20px 0px",
				minWidth: "75px",
				"& .MuiSelect-select": {
					padding: "0px 0px 4px"
				}
			} }
			value={ props.selectedBase }
			variant="standard">
			<MenuItem style={ { fontFamily: "Roboto Mono" } } value={ 0 }>NONE:</MenuItem>

			{
				Array.from( { length: 35 }, ( _, i ) => i + 2 ).map( ( item ) => (
					<MenuItem key={ item } style={ { fontFamily: "Roboto Mono" } } value={ item }>B{ ( "0" + item ).slice( -2 ) }:</MenuItem>
				) )
			}
		</Select>
	);
}

BaseSelectionMenu.propTypes = {
	selectedBase: PropTypes.number.isRequired,
	setBase: PropTypes.func.isRequired
};

export default React.memo( BaseSelectionMenu );
