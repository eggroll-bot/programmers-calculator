import displayOperation from "./display-operation";
import { allOperations } from "./operations";

const basicOperationPad = new Map( [
	[
		"÷INT",
		{
			onClick: displayOperation.appendOperation,
			precedence: 3,
			evaluate: ( left, right ) => {
				if ( right === 0n ) {
					return undefined;
				}

				return left / right;
			}
		}
	],
	[
		"×",
		{
			onClick: displayOperation.appendOperation,
			precedence: 3,
			evaluate: ( left, right ) => {
				return left * right;
			}
		}
	],
	[
		"−",
		{
			onClick: displayOperation.appendOperation,
			precedence: 4,
			evaluate: ( left, right ) => {
				return left - right;
			}
		}
	],
	[
		"+",
		{
			onClick: displayOperation.appendOperation,
			precedence: 4,
			evaluate: ( left, right ) => {
				return left + right;
			}
		}
	],
	[
		"=",
		{
			onClick: displayOperation.evaluate
		}
	]
] );

basicOperationPad.forEach( ( operationDetails, operation ) => {
	if ( operationDetails.evaluate ) {
		allOperations.set( operation, operationDetails );
	}
} );

export default basicOperationPad;
