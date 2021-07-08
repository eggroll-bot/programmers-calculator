import displayOperation from "./display-operation";

export default new Map( [
	[
		"SLL",
		{
			unary: false,
			onClick: displayOperation.appendOperation
		}
	],
	[
		"SRL",
		{
			unary: false,
			onClick: displayOperation.appendOperation
		}
	],
	[
		"SRA",
		{
			unary: false,
			onClick: displayOperation.appendOperation
		}
	],
	[
		"ROL",
		{
			unary: false,
			onClick: displayOperation.appendOperation
		}
	],
	[
		"ROR",
		{
			unary: false,
			onClick: displayOperation.appendOperation
		}
	],
	[
		"POW",
		{
			unary: false,
			onClick: displayOperation.appendOperation
		}
	],
	[
		"NOT",
		{
			unary: true,
			onClick: displayOperation.appendUnaryOperation
		}
	],
	[
		"AND",
		{
			unary: false,
			onClick: displayOperation.appendOperation
		}
	],
	[
		"OR",
		{
			unary: false,
			onClick: displayOperation.appendOperation
		}
	],
	[
		"(",
		{
			unary: false,
			onClick: displayOperation.appendParentheses
		}
	],
	[
		")",
		{
			unary: false,
			onClick: displayOperation.appendParentheses
		}
	],
	[
		"XOR",
		{
			unary: false,
			onClick: displayOperation.appendOperation
		}
	]
] );
