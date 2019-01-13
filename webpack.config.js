const path = require('path');

module.exports = {
	entry: {
		'atom': './src/atom.js',
		'atom_object': './src/atom_object.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: ['name'].js,
		libraryTarget: 'window'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modues/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
}