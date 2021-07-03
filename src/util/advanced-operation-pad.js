import displayOperation from "./display-operation";

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
		text: "ROL",
		onClick: displayOperation.appendOperation
	},
	{
		text: "ROR",
		onClick: displayOperation.appendOperation
	},
	{
		text: "POW",
		onClick: displayOperation.appendOperation
	},
	{
		text: "NOT",
		onClick: displayOperation.appendUnaryOperation
	},
	{
		text: "AND",
		onClick: displayOperation.appendOperation
	},
	{
		text: "OR",
		onClick: displayOperation.appendOperation
	},
	{
		text: "(",
		onClick: displayOperation.appendParentheses
	},
	{
		text: ")",
		onClick: displayOperation.appendParentheses
	},
	{
		text: "XOR",
		onClick: displayOperation.appendOperation
	}
];
