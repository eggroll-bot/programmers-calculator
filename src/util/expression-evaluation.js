import { allOperations, unaryOperations } from "./operations";

export function checkExpression( expression ) {
	const tokens = expression.split( " " );
	const lastToken = tokens[ tokens.length - 1 ];

	if ( lastToken !== ")" && isNaN( lastToken ) ) { // Last token is an operator or opening parenthesis.
		return false;
	}

	return true;
}

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

	return "( " + text + " )".repeat( openingParenthesesCount - closingParenthesesCount ) + " )";
}

// Will throw an undefined exception if the evaluate function returns undefined.
function evaluateOperation( outputArray, operationArray ) {
	let result = "";
	const operator = operationArray.pop( );
	const firstNumber = BigInt( outputArray.pop( ) );

	if ( unaryOperations.get( operator ) ) { // Operator is a unary operator.
		result = allOperations.get( operator ).evaluate( firstNumber );
	} else {
		const secondNumber = BigInt( outputArray.pop( ) );
		result = allOperations.get( operator ).evaluate( firstNumber, secondNumber );
	}

	outputArray.push( result.toString( ) );
}

export function evaluateExpression( expression ) {
	const outputArray = [ ];
	const operationArray = [ ];
	const tokens = expression.split( " " );

	tokens.forEach( ( token ) => {
		if ( !isNaN( token ) ) { // Token is a number.
			outputArray.push( token );
		} else if ( unaryOperations.get( token ) ) { // Token is a unary operator.
			operationArray.push( token );
		} else if ( token === "(" ) {
			operationArray.push( token );
		} else if ( token === ")" ) {
			while ( operationArray[ operationArray.length - 1 ] !== "(" ) { // Last element in the operation array is not an opening parenthesis.
				evaluateOperation( outputArray, operationArray );
			}

			operationArray.pop( ); // Discard the opening parenthesis.
		} else { // Token is a binary operator.
			let lastOperation = operationArray[ operationArray.length - 1 ];
			let lastOperationDetails = allOperations.get( lastOperation );
			let tokenOperationDetails = allOperations.get( token );

			while ( operationArray.length !== 0 && lastOperation !== "(" && // Last element of the operation array contains an operation that isn't an opening parenthesis, and
                  ( lastOperationDetails.precedence < tokenOperationDetails.precedence || // ( the last operation in the array has a higher precedence than the token operation or
                  ( lastOperationDetails.precedence === tokenOperationDetails.precedence && // ( the last operation in the array has equal precedence with the token operation and
                    !tokenOperationDetails.rtl ) ) ) { // the token operation has left-to-right associativity ) ).
				evaluateOperation( outputArray, operationArray );

				// Update loop variables.
				lastOperation = operationArray[ operationArray.length - 1 ];
				lastOperationDetails = allOperations.get( lastOperation );
				tokenOperationDetails = allOperations.get( token );
			}

			operationArray.push( token );
		}
	} );

	if ( outputArray.length > 1 ) {
		throw "Output array has more than 1 element at the end.";
	}

	return outputArray[ 0 ];
}
