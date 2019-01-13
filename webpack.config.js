const path = require('path');

module.exports = {
	entry: {
		index: './src/atom.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'atom.js',
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