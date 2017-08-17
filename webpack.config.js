const path = require("path");
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: __dirname,

	entry: './assets/client/src/index.js', // entry point of our app.

	output: {
		path: path.resolve('./assets/bundles/'),
		filename: "[name]-[hash].js"
	},

	plugins: [
		new BundleTracker({
			filename: './webpack-stats.json'
		}),
		new ExtractTextPlugin("styles.css")
	],

	module: {
		rules: [
			{
				test: /\.jsx?$/,  // to transform JSX into JS
				exclude: /node_modules/,
				loader: 'babel-loader',
				query  :{
					presets:['react','es2015']
				}
			},
			//{
			//	test: /\.less?$/,
			//	use: [{
			//		loader: "style-loader"
			//	}, {
			//		loader: "css-loader"
			//	}, {
			//		loader: "less-loader", options: {
			//			strictMath: true,
			//			noIeCompat: true
			//		}
			//	}]
			//},

			{
				test: /\.less$/i,
				use: ExtractTextPlugin.extract(['css-loader', 'less-loader'])
			},
			{
				test: /\.css?$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader'
			},

			//{
			//	test: /\.(eot|ttf|woff2?|otf|svg|png|jpg)$/,
			//	loaders: ['file-loader']
			//},
			//{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
			//{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },

			// font-awesome icons
			// the url-loader uses DataUrls.
			// the file-loader emits files.
			//{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
			//{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }

			//{
			//	test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
			//	loader: "url?limit=10000&mimetype=application/font-woff"
			//}, {
			//	test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
			//	loader: "url?limit=10000&mimetype=application/font-woff"
			//}, {
			//	test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			//	loader: "url?limit=10000&mimetype=application/octet-stream"
			//}, {
			//	test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			//	loader: "file"
			//}, {
			//	test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			//	loader: "url?limit=10000&mimetype=image/svg+xml"
			//}
			//{ test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'file-loader?name=[path][name].[ext]?[hash]' },
			//{
			//	test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
			//	loader: 'url?limit=10000',
			//}
		]
	},

	resolve: {
		modules: ['node_modules', 'bower_components'],
		extensions: ['.js', '.jsx']
	}
};