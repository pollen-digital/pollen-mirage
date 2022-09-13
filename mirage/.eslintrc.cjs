module.exports = {
	root: true,
	extends: ["eslint:recommended", "prettier"],
	plugins: ["svelte3"],
	overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
	},
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"prettier",
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"array-bracket-spacing": "error",
		"comma-dangle": [
			"error",
			{
				arrays: "always",
				objects: "always",
				imports: "never",
				exports: "never",
				functions: "never",
			},
		],
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		"no-console": [
			"error",
			{
				allow: ["warn", "error"],
			},
		],
		"no-else-return": "error",
		"no-unused-vars": "off",
		quotes: ["error", "double"],
		semi: ["error", "always"],
	},
};
