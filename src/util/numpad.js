import displayOperation from "./display-operation";
import { allOperations, unaryOperations } from "./operations";

// TO-DO: Implement Ans.

const numpad = new Map( [
	[
		"+/-",
		{
			onClick: displayOperation.negate
		}
	],
	[
		"C",
		{
			onClick: displayOperation.clear
		}
	],
	[
		"⌫",
		{
			onClick: displayOperation.backspace
		}
	],
	[
		"7",
		{
			onClick: displayOperation.appendNumber
		}
	],
	[
		"8",
		{
			onClick: displayOperation.appendNumber
		}
	],
	[
		"9",
		{
			onClick: displayOperation.appendNumber
		}
	],
	[
		"4",
		{
			onClick: displayOperation.appendNumber
		}
	],
	[
		"5",
		{
			onClick: displayOperation.appendNumber
		}
	],
	[
		"6",
		{
			onClick: displayOperation.appendNumber
		}
	],
	[
		"1",
		{
			onClick: displayOperation.appendNumber
		}
	],
	[
		"2",
		{
			onClick: displayOperation.appendNumber
		}
	],
	[
		"3",
		{
			onClick: displayOperation.appendNumber
		}
	],
	[
		"-",
		{
			unary: true,
			onClick: displayOperation.appendUnaryOperation,
			evaluate: ( number ) => {
				return -number;
			}
		}
	],
	[
		"0",
		{
			onClick: displayOperation.appendNumber
		}
	],
	[
		"ANS",
		{
			onClick: ( ) => { }
		}
	],
] );

numpad.forEach( ( operationDetails, operation ) => {
	if ( operationDetails.unary ) {
		unaryOperations[ operation ] = true;
	}

	allOperations[ operation ] = operationDetails;
} );

export default numpad;
