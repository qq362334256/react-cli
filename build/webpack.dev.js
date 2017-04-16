const 
	path = require('path'),
	webpack = require('webpack'),
	dirName = path.resolve(__dirname, './../'),
	{ devServer: {port}, devConfig: {RESOURCES_URL} } = require('./config.json'),
	{ context, entry, output, crossOriginLoading, resolve, plugins, devtool, module: {rules} } = require('./webpack.base.js');


// 导出开发配置对象
module.exports = {
	context,
	entry,
	resolve,
	devtool,
	output: {
		crossOriginLoading,
		path: output.path,
		publicPath: `${RESOURCES_URL}/`,
		// 打包文件命名规则
		filename: 'js/[name].js',
		// 异步按需加载文件命名规则
		chunkFilename: 'js/[name].js',
	},
	module: {
		rules: [...rules, {
			test: /\.less$/,
			use: [
				'style-loader',
				{ 
					loader: 'css-loader', 
					options: { importLoaders: 1 } 
				},
          		'less-loader'
			]
		}]
	},
  	plugins: [
  		...plugins,
		// 抽出依赖库、和公共文件
		new webpack.optimize.CommonsChunkPlugin('public'),
	    // 设置nodejs环境常量
		new webpack.DefinePlugin({
			// 设置为开发环境
      		'process.env.NODE_ENV': JSON.stringify('development')
    	}),
    	// 测试服务自动hot插件
    	new webpack.HotModuleReplacementPlugin()
	],
	// 测试服务
	devServer: {
		// 请求端口
		port,
		// 控制台和devtool显示消息
		clientLogLevel: 'error',
		// 所有的服务都启动gzip压缩
		compress: true,
		// 指定测试服务的资源目录
		contentBase: path.resolve(dirName, 'dist'),
		// 请求404的时候跳转到index.html页面
		historyApiFallback: true,
		// 添加热替换功能
		hot: true,
		// 开启内联模式，没有hot就刷新游览器
		inline: true,
		// 防止热替换失败，会使得内联失效
		hotOnly: false,
		// 禁止惰性模式
		lazy: false,
		// 隐藏无用信息
		noInfo: true,
		// 控制台不答应任何信息，包括错误
		quiet: false,
		// 展示精确的bundel信息展示,使用 quiet 或 noInfo 时，此选项无效
		// stats: 'errors-only',
	},
	// 监听文件变化
	watch: true,
	// 监听文件变化配置
	watchOptions: {
		// 排除大文件监听
		ignored: /node_modules/,
		// 监听失效轮询时间
		poll: 100
	}
};