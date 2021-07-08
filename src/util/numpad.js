import displayOperation from "./display-operation";
import { allOperations, unaryOperations } from "./operations";

// TO-DO: Implement Ans.

const numpad = new Map( [
	[
		"+/-",
		{
			unary: false,
			onClick: displayOperation.negate
		}
	],
	[
		"C",
		{
			unary: false,
			onClick: displayOperation.clear
		}
	],
	[
		"⌫",
		{
			unary: false,
			onClick: displayOperation.backspace
		}
	],
	[
		"7",
		{
			unary: false,
			onClick: displayOperation.appendNumber
		}
	],
	[
		"8",
		{
			unary: false,
			onClick: displayOperation.appendNumber
		}
	],
	[
		"9",
		{
			unary: false,
			onClick: displayOperation.appendNumber
		}
	],
	[
		"4",
		{
			unary: false,
			onClick: displayOperation.appendNumber
		}
	],
	[
		"5",
		{
			unary: false,
			onClick: displayOperation.appendNumber
		}
	],
	[
		"6",
		{
			unary: false,
			onClick: displayOperation.appendNumber
		}
	],
	[
		"1",
		{
			unary: false,
			onClick: displayOperation.appendNumber
		}
	],
	[
		"2",
		{
			unary: false,
			onClick: displayOperation.appendNumber
		}
	],
	[
		"3",
		{
			unary: false,
			onClick: displayOperation.appendNumber
		}
	],
	[
		"-",
		{
			unary: true,
			onClick: displayOperation.appendUnaryOperation
		}
	],
	[
		"0",
		{
			unary: false,
			onClick: displayOperation.appendNumber
		}
	],
	[
		"ANS",
		{
			unary: false,
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
