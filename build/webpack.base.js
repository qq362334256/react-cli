const 
	path = require('path'),
	webpack = require('webpack');

// 到出核心配置
module.exports = {
	module: {
		rules: [{

		}]
	}
};


// const 
// 	path = require('path'),
// 	webpack = require('webpack'),
// 	ExtractTextPlugin = require('extract-text-webpack-plugin');

	
// module.exports = {
// 	// 根目录，为了解决loader 和 entry，默认为当前目录
// 	context: path.resolve(__dirname, 'app'),
// 	// 模块入口，可是配置多入口
// 	entry: {
// 		// 单页应用入口
// 		bundle: './app.js',
// 		// lib库入口
// 		verdor: 'react'
// 	},
// 	// 打包出口配置
// 	output: {
// 		// 输出路径，必须是绝对路径
// 		path: path.resolve(__dirname, 'dist'), 
// 		// 打包文件命名规则
// 		filename: 'js/[name].[chunkhash].min.js',
// 		// 异步按需加载文件命名规则
// 		chunkFilename: 'js/[name].[chunkhash].min.js',
// 		// 只有在web环境下判断是否是否开启jsonp加载
// 		crossOriginLoading: 'anonymous',
// 		// 发布时的域名地址
// 		publicPath: 'http://www.baidu.com'
// 	},
// 	module: {
// 		// 加载器规则
// 		rules: [{
// 			test: /\.css$/,
// 			use: ExtractTextPlugin.extract({
// 				use: 'css-loader'
// 			})
// 		}]
// 	},
// 	resolve: {
// 		// 默认查找模块目录
//  		modules: [
//     		'node_modules'
//     	],
//     	// 使用的扩展名，最好不要配置
//     	extensions: ['.js', '.json', '.jsx', '.css'],
//     	// 别名设置
//     	alias: {
//     		CONSTANT: path.resolve(__dirname, 'app/config/constant.config.js')
//     	}
// 	},
// 	// 插件集合
// 	plusins: [
// 		// 抽出css文件
// 		new ExtractTextPlugin('public.min.css'),
// 		// 抽出依赖库、和公共文件
// 		new webpack.optimize.CommonsChunkPlugin({
//             names: ['vendor', 'public']
//         }),
//         // 压缩文件
//      //    new webpack.optimize.UglifyJsPlugin({
//      //  		sourceMap: options.devtool && (options.devtool.indexOf('sourcemap') >= 0 || options.devtool.indexOf('source-map') >= 0)
//     	// }),
//     	// 设置nodejs的变量环境
//     	new webpack.DefinePlugin({
//     		// 设置为开发环境
// 	      	'process.env.NODE_ENV': JSON.stringify('production')
// 	    })
// 	],
// 	// 测试服务
// 	devServer: {
// 		// 控制台不显示任何消息
// 		clientLogLevel: 'none',
// 		// 所有的服务都启动gzip压缩
// 		compress: true,
// 		// 指定测试服务的资源目录
// 		contentBase: path.join(__dirname, 'dist'),
// 		// 请求404的时候跳转到index.html页面
// 		historyApiFallback: true,
// 		// 添加热替换功能
// 		hot: true,
// 		// 防止热替换失败
// 		hotOnly: true,
// 		// 禁止惰性模式
// 		lazy: false,
// 		// 隐藏无用信息
// 		noInfo: true,
// 		// 请求端口
// 		port: 5001,
// 		// 控制台不答应任何信息，包括错误
// 		quiet: false
// 	},
// 	// 资源映射
// 	devtool: 'cheap-module-source-map',
// 	// devtool: 'cheap-module-eval-source-map',
// 	// 监听文件变化
// 	watch: false,
// 	// 监听文件变化配置
// 	watchOptions: {
// 		// 排除大文件监听
// 		ignored: /node_modules/,
// 		// 监听失效轮询时间
// 		poll: 1000
// 	},
// 	// 打包文件中有超过250K的给出提示
// 	performance: {
//   		hints: 'warning'
// 	}
// };