import displayOperation from "./display-operation";
import { allOperations, unaryOperations } from "./operations";

const basicOperationPad = new Map( [
	[
		"÷",
		{
			unary: false,
			onClick: displayOperation.appendOperation
		}
	],
	[
		"×",
		{
			unary: false,
			onClick: displayOperation.appendOperation
		}
	],
	[
		"−",
		{
			unary: false,
			onClick: displayOperation.appendOperation
		}
	],
	[
		"+",
		{
			unary: false,
			onClick: displayOperation.appendOperation
		}
	],
	[
		"=",
		{
			unary: false,
			onClick: displayOperation.evaluate
		}
	]
] );

basicOperationPad.forEach( ( operationDetails, operation ) => {
	if ( operationDetails.unary ) {
		unaryOperations[ operation ] = true;
	}

	allOperations[ operation ] = operationDetails;
} );

export default basicOperationPad;
