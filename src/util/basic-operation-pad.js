import displayOperation from "./display-operation";
import { allOperations } from "./operations";

const basicOperationPad = new Map( [
	[
		"÷INT",
		{
			onClick: displayOperation.appendOperation,
			evaluate: ( left, right ) => {
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
	allOperations[ operation ] = operationDetails;
} );

export default basicOperationPad;
