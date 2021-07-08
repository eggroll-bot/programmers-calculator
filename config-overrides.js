const { override, useBabelRc } = require( "customize-cra" );

module.exports = override(
	//removeInternalBabelPlugin( "@babel/plugin-transform-exponentiation-operator" )
	useBabelRc( )
);
