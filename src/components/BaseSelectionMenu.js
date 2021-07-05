import React from "react";
import { makeStyles, MenuItem, Select } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles( {
	baseSelectionRoot: {
		fontFamily: "Roboto Mono",
		margin: "0px 18px 20px 0px",
		minWidth: "75px"
	},
	baseSelectionInput: {
		padding: "0px 0px 5px"
	}
} );

function BaseSelectionMenu( props ) {
	const classes = useStyles( );

	return (
		<Select className={ classes.baseSelectionRoot } inputProps={ { className: classes.baseSelectionInput } } onChange={ ( e ) => props.setBase( e.target.value ) } value={ props.selectedBase }>
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
