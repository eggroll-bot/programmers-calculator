import displayOperation from "./display-operation";

// TO-DO: Finish +/-, 1SC, and 2SC.
// TO-DO: For +/-, 1SC, and 2SC, if the display contains operators, make an error show up saying that the display cannot contain operators.
// TO-DO: Finish NOT.

export default [
	{
		text: "SLL",
		onClick: displayOperation.appendOperation
	},
	{
		text: "SRL",
		onClick: displayOperation.appendOperation
	},
	{
		text: "SRA",
		onClick: displayOperation.appendOperation
	},
	{
		text: "+/−",
		onClick: ( ) => { }
	},
	{
		text: "ROL",
		onClick: displayOperation.appendOperation
	},
	{
		text: "ROR",
		onClick: displayOperation.appendOperation
	},
	{
		text: "NOT",
		onClick: ( ) => { }
	},
	{
		text: "AND",
		onClick: displayOperation.appendOperation
	},
	{
		text: "1SC",
		onClick: ( ) => { }
	},
	{
		text: "2SC",
		onClick: ( ) => { }
	},
	{
		text: "OR",
		onClick: displayOperation.appendOperation
	},
	{
		text: "XOR",
		onClick: displayOperation.appendOperation
	},
	{
		text: "(",
		onClick: displayOperation.appendParentheses
	},
	{
		text: ")",
		onClick: displayOperation.appendParentheses
	}
];
