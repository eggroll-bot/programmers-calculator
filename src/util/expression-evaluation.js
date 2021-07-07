export function insertMissingClosingParentheses( text ) {
	const tokens = text.split( " " );

	const { openingParenthesesCount, closingParenthesesCount } = tokens.reduce( ( { openingParenthesesCount, closingParenthesesCount }, token ) => {
		if ( token === "(" ) {
			return { openingParenthesesCount: openingParenthesesCount + 1, closingParenthesesCount: closingParenthesesCount };
		} else if ( token === ")" ) {
			return { openingParenthesesCount: openingParenthesesCount, closingParenthesesCount: closingParenthesesCount + 1 };
		}

		return { openingParenthesesCount: openingParenthesesCount, closingParenthesesCount: closingParenthesesCount };
	}, { openingParenthesesCount: 0, closingParenthesesCount: 0 } );

	return text + " )".repeat( openingParenthesesCount - closingParenthesesCount );
}
