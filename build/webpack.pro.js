const 
	extractTextPlugin = require('extract-text-webpack-plugin'),
	{ module: {rules} } = require('./webpack.base.js');

// 导出生产配置对象
module.exports = {
	module: {
		rules: [...rules, {
			test: /\.less$/,
			use: extractTextPlugin.extract(
	          	fallbackLoader: 'style-loader',
	          	loaders: [{
	              	loader: 'css-loader',
	              	options: { importLoaders: 1 }
	            }, {
	              	loader: 'less-loader',
	            }
	          ]
	        )
		}]
	},
  	plugins: [
	    // 提取 CSS 到单独的文件中
	    new ExtractTextPlugin('[name].[chunkHash].css')
	]
};