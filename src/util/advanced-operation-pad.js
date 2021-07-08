import displayOperation from "./display-operation";
import { allOperations, unaryOperations } from "./operations";

const advancedOperationPad = new Map( [
	[
		"SLL",
		{
			unary: false,
			onClick: displayOperation.appendOperation,
			evaluate: ( left, right ) => {
				if ( right < 0n ) {
					return undefined;
				}

				return left << right;
			}
		}
	],
	[
		"SRL32",
		{
			unary: false,
			onClick: displayOperation.appendOperation,
			evaluate: ( left, right ) => {
				if ( right < 0n ) {
					return undefined;
				}

				const rightThirtyTwoBits = left & 4294967295n; // 2 ^ 32 - 1. Convert to unsigned 32-bit int.

				return rightThirtyTwoBits >> right;
			}
		}
	],
	[
		"SRA",
		{
			unary: false,
			onClick: displayOperation.appendOperation,
			evaluate: ( left, right ) => {
				if ( right < 0n ) {
					return undefined;
				}

				return left >> right;
			}
		}
	],
	[
		"ROL32",
		{
			unary: false,
			onClick: displayOperation.appendOperation,
			evaluate: ( left, right ) => {
				if ( right < 0n ) {
					return undefined;
				}

				let rightThirtyTwoBits = left & 4294967295n; // 2 ^ 32 - 1. Convert to unsigned 32-bit int.

				const rotateAmount = right % 32n;
				const rotateResult = ( ( rightThirtyTwoBits << rotateAmount ) & 4294967295n ) | ( rightThirtyTwoBits >> ( 32n - rotateAmount ) );

				return rotateResult >= 2147486648n ? rotateResult - 4294967296n : rotateResult;
			}
		}
	],
	[
		"ROR32",
		{
			unary: false,
			onClick: displayOperation.appendOperation,
			evaluate: ( left, right ) => {
				if ( right < 0n ) {
					return undefined;
				}

				let rightThirtyTwoBits = left & 4294967295n; // 2 ^ 32 - 1. Convert to unsigned 32-bit int.

				const rotateAmount = right % 32n;
				const rotateResult = ( rightThirtyTwoBits >> rotateAmount ) | ( ( rightThirtyTwoBits << ( 32n - rotateAmount ) ) & 4294967295n );

				return rotateResult >= 2147486648n ? rotateResult - 4294967296n : rotateResult;
			}
		}
	],
	[
		"POW",
		{
			unary: false,
			onClick: displayOperation.appendOperation
		}
	],
	[
		"NOT",
		{
			unary: true,
			onClick: displayOperation.appendUnaryOperation
		}
	],
	[
		"AND",
		{
			unary: false,
			onClick: displayOperation.appendOperation
		}
	],
	[
		"OR",
		{
			unary: false,
			onClick: displayOperation.appendOperation
		}
	],
	[
		"(",
		{
			unary: false,
			onClick: displayOperation.appendParentheses
		}
	],
	[
		")",
		{
			unary: false,
			onClick: displayOperation.appendParentheses
		}
	],
	[
		"XOR",
		{
			unary: false,
			onClick: displayOperation.appendOperation
		}
	]
] );

advancedOperationPad.forEach( ( operationDetails, operation ) => {
	if ( operationDetails.unary ) {
		unaryOperations[ operation ] = true;
	}

	allOperations[ operation ] = operationDetails;
} );

export default advancedOperationPad;
