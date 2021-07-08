import displayOperation from "./display-operation";

export default new Map( [
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
