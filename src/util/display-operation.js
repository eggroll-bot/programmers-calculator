import { unaryOperations } from "./operations";
import { checkExpression, evaluateExpression, insertMissingClosingParentheses } from "./expression-evaluation";

export default {
	appendOperation: ( itemText, displayText, setDisplayText ) => {
		const tokens = displayText.split( " " );
		const lastToken = tokens[ tokens.length - 1 ];

		if ( lastToken === "(" || unaryOperations[ lastToken ] ) { // No operations after a beginning parenthesis or unary operation.
			return;
		}

		if ( lastToken !== ")" && isNaN( lastToken ) ) { // Last token is an operator or opening parenthesis.
			tokens.pop( );
			tokens.push( itemText );
			setDisplayText( tokens.join( " " ) );

			return;
		}

		setDisplayText( displayText + " " + itemText );
	},
	appendUnaryOperation: ( itemText, displayText, setDisplayText ) => {
		const tokens = displayText.split( " " );
		const lastToken = tokens[ tokens.length - 1 ];

		if ( displayText === "0" ) { // Blank display.
			setDisplayText( itemText );
		}

		if ( isNaN( lastToken ) && lastToken !== ")" ) { // Last token is an operator or opening parenthesis.
			setDisplayText( displayText + " " + itemText );
		}
	},
	appendParentheses: ( itemText, displayText, setDisplayText ) => {
		const tokens = displayText.split( " " );
		const lastToken = tokens[ tokens.length - 1 ];

		const { openingParenthesesCount, closingParenthesesCount } = tokens.reduce( ( { openingParenthesesCount, closingParenthesesCount }, token ) => {
			if ( token === "(" ) {
				return { openingParenthesesCount: openingParenthesesCount + 1, closingParenthesesCount: closingParenthesesCount };
			} else if ( token === ")" ) {
				return { openingParenthesesCount: openingParenthesesCount, closingParenthesesCount: closingParenthesesCount + 1 };
			}

			return { openingParenthesesCount: openingParenthesesCount, closingParenthesesCount: closingParenthesesCount };
		}, { openingParenthesesCount: 0, closingParenthesesCount: 0 } );

		if ( displayText === "0" && itemText === "(" ) { // Can add opening parenthesis to blank display.
			setDisplayText( "(" );

			return;
		}

		if ( itemText === "(" && lastToken !== ")" && isNaN( lastToken ) ) { // Opening parentheses only after opening parentheses and operators.
			setDisplayText( displayText + " (" );
		} else if ( itemText === ")" && closingParenthesesCount < openingParenthesesCount && ( lastToken === ")" || !isNaN( lastToken ) ) ) { // Closing parentheses only after closing parentheses and numbers.
			setDisplayText( displayText + " )" );
		}
	},
	appendNumber: ( itemText, displayText, setDisplayText ) => {
		const tokens = displayText.split( " " );
		const lastToken = tokens[ tokens.length - 1 ];

		if ( lastToken === "0" ) { // Ensure there's no leading zeros.
			tokens.pop( );
			tokens.push( itemText );
			setDisplayText( tokens.join( " " ) );

			return;
		}

		if ( isNaN( lastToken ) && lastToken !== "-" ) { // Last token is an operator that isn't a negative sign.
			if ( lastToken !== ")" ) {
				setDisplayText( displayText + " " + itemText );
			}

			return;
		} else if ( lastToken === "-" && itemText === "0" ) { // Do not allow negative zero.
			return;
		}

		setDisplayText( displayText + itemText );
	},
	negate: ( _, displayText, setDisplayText ) => {
		const tokens = displayText.split( " " );

		// Go backward until a number is found.
		for ( let i = tokens.length; i >= 0; i-- ) {
			const sign = Math.sign( tokens[ i ] );

			if ( !isNaN( sign ) ) {
				if ( sign == 1 ) {
					tokens[ i ] = "-" + tokens[ i ];
				} else if ( sign == -1 ) {
					tokens[ i ] = tokens[ i ].substring( 1 );
				}

				setDisplayText( tokens.join( " " ) );

				return;
			}
		}
	},
	clear: ( _, __, setDisplayText ) => {
		setDisplayText( "0" );
	},
	backspace: ( _, displayText, setDisplayText ) => {
		const tokens = displayText.split( " " );
		const lastToken = tokens[ tokens.length - 1 ];

		if ( !isNaN( lastToken ) && lastToken.length > 1 ) { // Backspace only one number in a number.
			tokens.pop( );
			tokens.push( lastToken.substring( 0, lastToken.length - 1 ) );
			setDisplayText( tokens.join( " " ) );

			return;
		}

		if ( tokens.length === 1 ) { // Zero the display if there is only one token left.
			setDisplayText( "0" );

			return;
		}

		tokens.pop( );
		setDisplayText( tokens.join( " " ) );
	},
	evaluate: ( _, displayText, setDisplayText ) => {
		if ( !checkExpression( displayText ) ) {
			setDisplayText( "0" );
			alert( "Failed to evaluate" );

			return;
		}

		const preprocessedDisplayText = insertMissingClosingParentheses( displayText );
		const expressionResult = evaluateExpression( preprocessedDisplayText );
		setDisplayText( expressionResult );
	}
};
