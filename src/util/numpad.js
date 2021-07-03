import displayOperation from "./display-operation";

// TO-DO: Finish +/-. Make it turn the last number negative. Add handling for negative numbers to calculator.

export default [
	{
		text: "+/−",
		onClick: ( ) => { }
	},
	{
		text: "C",
		onClick: displayOperation.clear
	},
	{
		text: "⌫",
		onClick: displayOperation.backspace
	},
	{
		text: "7",
		onClick: displayOperation.appendNumber
	},
	{
		text: "8",
		onClick: displayOperation.appendNumber
	},
	{
		text: "9",
		onClick: displayOperation.appendNumber
	},
	{
		text: "4",
		onClick: displayOperation.appendNumber
	},
	{
		text: "5",
		onClick: displayOperation.appendNumber
	},
	{
		text: "6",
		onClick: displayOperation.appendNumber
	},
	{
		text: "1",
		onClick: displayOperation.appendNumber
	},
	{
		text: "2",
		onClick: displayOperation.appendNumber
	},
	{
		text: "3",
		onClick: displayOperation.appendNumber
	},
	{
		text: "0",
		onClick: displayOperation.appendNumber
	}
];
