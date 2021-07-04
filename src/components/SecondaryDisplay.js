import React from "react";
import DisplayTextContext from "../contexts/display-text-context";
import { Grid, MenuItem, Paper, Select, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

// TO-DO: Finish custom base conversion.
// TO-DO: Improve horizontal scrolling in secondary display.

// Find the last number in text separated by spaces.
function findLastNumberInText( text ) {
	const tokens = text.split( " " );

	for ( let i = tokens.length - 1; i >= 0; i-- ) {
		if ( !isNaN( tokens[ i ] ) ) {
			return BigInt( tokens[ i ] );
		}
	}

	return 0n; // No number found.
}

/* Stylize a number represented as a string. Will prepend 0s to make the number of digits divisible by 4. If the number of digits is already divisible
 * by 4, the function will add four more 0s. Then, the function will add spaces every four digits. The number represented as a string must have a sign
 * character at the beginning.
*/
function stylizeNumberString( numberString ) {
	return numberString.substring( 0, 1 ) + ( "0".repeat( 4 - ( ( numberString.length - 1 ) % 4 ) ) + numberString.substring( 1 ) ).match( /.{1,4}/g ).join( " " ).toUpperCase( );
}

// TO-DO: Add style for typography below.

function SecondaryDisplay( props ) {
	const [ displayText ] = React.useContext( DisplayTextContext );
	const [ bin, setBin ] = React.useState( );
	const [ onesComplement, setOnesComplement ] = React.useState( );
	const [ twosComplement, setTwosComplement ] = React.useState( );
	const [ hex, setHex ] = React.useState( );
	const [ customBase, setCustomBase ] = React.useState( 0 );
	const [ customBaseConverted, setCustomBaseConverted ] = React.useState( );

	// Update BIN.
	React.useEffect( ( ) => {
		const lastNumber = findLastNumberInText( displayText );
		const stylizedNumberString = stylizeNumberString( lastNumber >= 0 ? " " + lastNumber.toString( 2 ) : lastNumber.toString( 2 ) );
		setBin( stylizedNumberString );
	}, [ displayText ] );

	// Update 1SC.
	React.useEffect( ( ) => {
		const lastNumber = findLastNumberInText( displayText );
		const lastNumberAbs = lastNumber >= 0 ? lastNumber : BigInt( lastNumber.toString( ).substring( 1 ) );
		const stylizedBinString = stylizeNumberString( " " + lastNumberAbs.toString( 2 ) );

		if ( lastNumber >= 0 ) {
			setOnesComplement( stylizedBinString );

			return;
		}

		const stylizedOnesComplementStringArray = [ ];

		// Invert all 0s and 1s.
		stylizedBinString.split( "" ).forEach( char => {
			if ( char === "0" ) {
				stylizedOnesComplementStringArray.push( "1" );
			} else if ( char === "1" ) {
				stylizedOnesComplementStringArray.push( "0" );
			} else {
				stylizedOnesComplementStringArray.push( char );
			}
		} );

		setOnesComplement( stylizedOnesComplementStringArray.join( "" ) );
	}, [ displayText ] );

	// Update 2SC.
	React.useEffect( ( ) => {
		const lastNumber = findLastNumberInText( displayText );
		const lastNumberAbs = lastNumber >= 0 ? lastNumber : BigInt( lastNumber.toString( ).substring( 1 ) );

		if ( lastNumber >= 0 ) {
			const stylizedBinString = stylizeNumberString( " " + lastNumberAbs.toString( 2 ) );
			setTwosComplement( stylizedBinString );

			return;
		}

		const lastNumberAbsMinusOne = lastNumberAbs - 1n; // Subtract 1 now, instead of adding 1 at the end because it's easier to do now.
		let stylizedBinString = "";

		// Add extra 0 if lastNumberAbs is a power of 2 to account for loss of digit. This is done to align the 2SC representation with other binary representations.
		if ( ( lastNumberAbs & ( lastNumberAbs - 1n ) ) === 0n ) { // lastNumberAbs is a power of 2.
			stylizedBinString = stylizeNumberString( " 0" + lastNumberAbsMinusOne.toString( 2 ) );
		} else {
			stylizedBinString = stylizeNumberString( " " + lastNumberAbsMinusOne.toString( 2 ) );
		}

		const stylizedTwosComplementStringArray = [ ];

		// Invert all 0s and 1s.
		stylizedBinString.split( "" ).forEach( char => {
			if ( char === "0" ) {
				stylizedTwosComplementStringArray.push( "1" );
			} else if ( char === "1" ) {
				stylizedTwosComplementStringArray.push( "0" );
			} else {
				stylizedTwosComplementStringArray.push( char );
			}
		} );

		setTwosComplement( stylizedTwosComplementStringArray.join( "" ) );
	}, [ displayText ] );

	// Update HEX.
	React.useEffect( ( ) => {
		const lastNumber = findLastNumberInText( displayText );
		const stylizedNumberString = stylizeNumberString( lastNumber >= 0 ? " " + lastNumber.toString( 16 ) : lastNumber.toString( 16 ) );
		setHex( stylizedNumberString );
	}, [ displayText ] );

	// Update custom base.
	React.useEffect( ( ) => {
		if ( customBase === 0 ) {
			setCustomBaseConverted( "" );

			return;
		}

		const lastNumber = findLastNumberInText( displayText );
		const stylizedNumberString = stylizeNumberString( lastNumber >= 0 ? " " + lastNumber.toString( customBase ) : lastNumber.toString( customBase ) );
		setCustomBaseConverted( stylizedNumberString );
	}, [ customBase, displayText ] );

	return (
		<Paper square elevation={ 0 } style={ { textAlign: "left", width: props.width } }>
			<Grid container>
				<Grid item>
					<Typography style={ { fontFamily: "Roboto Mono", fontSize: "16px", height: props.height, overflowX: "auto", padding: "5px 15px" } }>
						BIN:
					</Typography>

					<Typography style={ { fontFamily: "Roboto Mono", fontSize: "16px", height: props.height, overflowX: "auto", padding: "5px 15px" } }>
						1SC:
					</Typography>

					<Typography style={ { fontFamily: "Roboto Mono", fontSize: "16px", height: props.height, overflowX: "auto", padding: "5px 15px" } }>
						2SC:
					</Typography>

					<Typography style={ { fontFamily: "Roboto Mono", fontSize: "16px", height: props.height, overflowX: "auto", padding: "5px 15px" } }>
						HEX:
					</Typography>

					<Select onChange={ ( e ) => setCustomBase( e.target.value ) } style={ { fontFamily: "Roboto Mono", margin: "5px 15px", minWidth: "70px" } } value={ customBase }>
						<MenuItem style={ { fontFamily: "Roboto Mono" } } value={ 0 }>NONE:</MenuItem>

						{
							Array.from( { length: 35 }, ( _, i ) => i + 2 ).map( ( item ) => (
								<MenuItem key={ item } style={ { fontFamily: "Roboto Mono" } } value={ item }>B{ ( "0" + item ).slice( -2 ) }:</MenuItem>
							) )
						}
					</Select>
				</Grid>

				<Grid item>
					<Typography style={ { fontFamily: "Roboto Mono", fontSize: "16px", height: props.height, overflowX: "auto", padding: "5px 15px", whiteSpace: "pre" } }>
						{ bin }
					</Typography>

					<Typography style={ { fontFamily: "Roboto Mono", fontSize: "16px", height: props.height, overflowX: "auto", padding: "5px 15px", whiteSpace: "pre" } }>
						{ onesComplement }
					</Typography>

					<Typography style={ { fontFamily: "Roboto Mono", fontSize: "16px", height: props.height, overflowX: "auto", padding: "5px 15px", whiteSpace: "pre" } }>
						{ twosComplement }
					</Typography>

					<Typography style={ { fontFamily: "Roboto Mono", fontSize: "16px", height: props.height, overflowX: "auto", padding: "5px 15px", whiteSpace: "pre" } }>
						{ hex }
					</Typography>

					<Typography style={ { fontFamily: "Roboto Mono", fontSize: "16px", height: props.height, overflowX: "auto", padding: "10px 15px", whiteSpace: "pre" } }>
						{ customBaseConverted }
					</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
}

SecondaryDisplay.propTypes = {
	height: PropTypes.string,
	width: PropTypes.string
};

export default SecondaryDisplay;
