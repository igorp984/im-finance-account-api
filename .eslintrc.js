module.exports = {
	env: {
		node: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	settings: {
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'import'],
	rules: {
		'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
		'no-console': 0,
		indent: ['error', 'tab'],
		'no-tabs': [2, { allowIndentationTabs: true }],
		'prettier/prettier': ['error'],
		'import/no-unresolved': ['error'],
	},
};
