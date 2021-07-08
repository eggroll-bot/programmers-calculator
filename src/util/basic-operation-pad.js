import displayOperation from "./display-operation";
import { allOperations, unaryOperations } from "./operations";

const basicOperationPad = new Map( [
	[
		"÷",
		{
			onClick: displayOperation.appendOperation
		}
	],
	[
		"×",
		{
			onClick: displayOperation.appendOperation
		}
	],
	[
		"−",
		{
			onClick: displayOperation.appendOperation
		}
	],
	[
		"+",
		{
			onClick: displayOperation.appendOperation
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
