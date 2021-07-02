export default {
	appendOperation: ( itemText, displayText, setDisplayText ) => {
		const tokens = displayText.split( " " );
		const lastToken = tokens[ tokens.length - 1 ];

		if ( lastToken === "(" ) { // No operations after a beginning parenthesis.
			return;
		}

		if ( lastToken !== ")" && isNaN( lastToken ) ) { // Last token is an operator.
			tokens.pop( );
			tokens.push( itemText );
			setDisplayText( tokens.join( " " ) );
		} else { // Last token is a number or closing parenthesis.
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

		if ( displayText === "0" ) { // Blank display.
			if ( itemText === "(" ) {
				setDisplayText( "(" );
			}

			return;
		}

		if ( itemText === "(" && lastToken !== ")" && isNaN( lastToken ) ) { // Opening parentheses only after opening parentheses and operators.
			setDisplayText( displayText + " (" );
		} else if ( itemText === ")" && closingParenthesesCount < openingParenthesesCount && ( lastToken === ")" || !isNaN( lastToken ) ) ) { // Closing parentheses only after closing parentheses and numbers.
			setDisplayText( displayText + " )" );
		}
	},
	clear: ( _, __, setDisplayText ) => {
		setDisplayText( "0" );
	},
	backspace: ( _, displayText, setDisplayText ) => {
		const tokens = displayText.split( " " );

		if ( tokens.length === 1 ) { // Zero the display if there is only one token left.
			setDisplayText( "0" );

			return;
		}

		tokens.pop( );
		setDisplayText( tokens.join( " " ) );
	}
};

// TO-DO: When calculating parentheses after pressing the = button, append closing parentheses for each unclosed set of parentheses when processing.
