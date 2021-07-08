import displayOperation from "./display-operation";
import { allOperations } from "./operations";

const basicOperationPad = new Map( [
	[
		"÷INT",
		{
			onClick: displayOperation.appendOperation,
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
			evaluate: ( left, right ) => {
				return left * right;
			}
		}
	],
	[
		"−",
		{
			onClick: displayOperation.appendOperation,
			evaluate: ( left, right ) => {
				return left - right;
			}
		}
	],
	[
		"+",
		{
			onClick: displayOperation.appendOperation,
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
		allOperations[ operation ] = operationDetails;
	}
} );

export default basicOperationPad;
