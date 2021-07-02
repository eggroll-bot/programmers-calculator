import displayOperation from "./display-operation";

// TO-DO: Finish =.
// TO-DO: When calculating parentheses after pressing the = button, append closing parentheses for each unclosed set of parentheses when processing.
// TO-DO: Generate syntax tree when evaluating the expression at the end. Each node in the syntax tree should have an operator, and children node(s).

export default [
	{
		text: "÷",
		onClick: displayOperation.appendOperation
	},
	{
		text: "×",
		onClick: displayOperation.appendOperation
	},
	{
		text: "−",
		onClick: displayOperation.appendOperation
	},
	{
		text: "+",
		onClick: displayOperation.appendOperation
	},
	{
		text: "=",
		onClick: ( ) => { }
	}
];
