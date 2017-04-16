const 
	webpack = require('webpack'),
	extractTextPlugin = require('extract-text-webpack-plugin'),
	{ maxFileSize, proConfig: {RESOURCES_URL: publicPath} } = require('./config.json'),
	{ context, entry, crossOriginLoading, resolve, plugins, devtool, output: {path}, module: {rules} } = require('./webpack.base.js');


// 优化路口
// lib依赖入口模块
entry.vendor = ['react'];

// 导出生产配置对象
module.exports = {
	context,
	entry,
	resolve,
	devtool,
	output: {
		path,
		publicPath,
		// 打包文件命名规则
		filename: 'js/[name].[chunkhash].min.js',
		// 异步按需加载文件命名规则
		chunkFilename: 'js/[name].[chunkhash].min.js',
	},
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
	            },
	            publicPath: '../'
	          ]
	        )
		}]
	},
  	plugins: [
  		...plugins,
 		// 抽出依赖库、和公共文件
		new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'public']
        }),
	    // 提取 CSS 到单独的文件中
	    new ExtractTextPlugin('css/[name].[chunkhash].min.css'),
	    // 压缩文件
	    new webpack.optimize.UglifyJsPlugin(),
	    // 设置nodejs环境常量
		new webpack.DefinePlugin({
			// 设置为开发环境
      		'process.env.NODE_ENV': JSON.stringify('production')
    	})
	],
	performance: {
		// 打包文件超过默认值就提示
  		hints: 'warning',
  		// 打包入口最大文件大小，超过则会在控制台提示
  		maxEntrypointSize: maxFileSize，
  		// 打包出口最大文件大小，超过则会在控制台提示
  		maxAssetSize: maxFileSize
	}
};