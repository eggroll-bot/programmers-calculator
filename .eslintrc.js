module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"commonjs": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double",
			{
				"allowTemplateLiterals": true
			}
		],
		"semi": [
			"error",
			"always"
		],
		"no-floating-decimal": [
			"error"
		],
		"no-trailing-spaces": [
			"error"
		],
		"space-in-parens": [
			"error",
			"always"
		],
		"template-curly-spacing": [
			"error",
			"always"
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"array-bracket-spacing": [
			"error",
			"always"
		],
		"react/jsx-curly-spacing": [
			"error",
			"always"
		],
		"react/jsx-equals-spacing": [
			"error",
			"never"
		],
		"react/jsx-tag-spacing": [
			"error",
			{
				"closingSlash": "never",
				"beforeSelfClosing": "always",
				"afterOpening": "never",
				"beforeClosing": "never"
			}
		],
		"padding-line-between-statements": [
			"error",
			{
				"blankLine": "always",
				"prev": "*",
				"next": "*"
			},
			{
				"blankLine": "any",
				"prev": [ "const", "let", "var", "expression" ],
				"next": [ "const", "let", "var", "expression" ]
			},
			{
				"blankLine": "any",
				"prev": "import",
				"next": "import"
			}
		],
		"react/jsx-curly-newline": [
			"error",
			{
				"multiline": "consistent",
				"singleline": "consistent"
			}
		],
		"react/jsx-wrap-multilines": [
			"error",
			{
				"declaration": "parens",
				"assignment": "parens",
				"return": "parens-new-line",
				"arrow": "parens",
				"condition": "ignore",
				"logical": "ignore",
				"prop": "ignore"
			}
		],
		"react/jsx-sort-props": [
			"error",
			{
				"ignoreCase": true,
				"shorthandFirst": true
			}
		],
		"react/jsx-sort-default-props": [
			"error",
			{
				"ignoreCase": true
			}
		],
		"react/sort-prop-types": [
			"error",
			{
				"ignoreCase": true,
				"sortShapeProp": true
			}
		],
		"eol-last": [
			"error",
			"always"
		]
	}
};
