import displayOperation from "./display-operation";

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
		onClick: displayOperation.evaluate
	}
];
