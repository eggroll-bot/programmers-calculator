export default {
	appendOperation: ( itemText, displayText, setDisplayText ) => {
		const tokens = displayText.split( " " );
		const lastToken = tokens[ tokens.length - 1 ];

		if ( lastToken === "(" ) { // No operations after a beginning parenthesis.
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
	appendNumber: ( itemText, displayText, setDisplayText ) => {
		const tokens = displayText.split( " " );
		const lastToken = tokens[ tokens.length - 1 ];

		if ( lastToken === "0" ) { // Ensure there's no leading zeros.
			tokens.pop( );
			tokens.push( itemText );
			setDisplayText( tokens.join( " " ) );

			return;
		}

		if ( isNaN( lastToken ) ) {
			if ( lastToken !== ")" ) {
				setDisplayText( displayText + " " + itemText );
			}

			return;
		}

		setDisplayText( displayText + itemText );
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
	}
};
