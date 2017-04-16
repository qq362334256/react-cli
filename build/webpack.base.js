const 
	path = require('path'),
	webpack = require('webpack'),
	dirName = path.resolve(__dirname, './../'),
	htmlWebpackPlugin = require('html-webpack-plugin');
	
// 到出核心配置
module.exports = {
	// loader的加载目录 和 entry入口目录指向路径
	context: path.resolve(dirName, 'app'),
	entry: {
		// 应用路口
		app: './entry.js'
	},
	output: {
		// 输出目录
		path: path.resolve(dirName, 'dist'),
		// 只有在web环境下判断是否是否开启jsonp加载
		crossOriginLoading: 'anonymous'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			include: path.resolve(dirName, 'app'),
			use: {
				loader: 'babel-loader',
    			options: {
          			presets: ['es2015', 'react', 'stage-0'],
          			plugins: ['transform-runtime']
        		}
			}
		}]
	},
	resolve: {
		// 默认查找模块目录
 		modules: ['node_modules'],
    	// 使用的扩展名，最好不要配置，这样在引入模块的时候更直观
    	// extensions: ['.js', '.json', '.jsx', '.css'],
    	// 别名设置
    	alias: {
    		// 全部全局常量模块
    		// CONSTANT: path.resolve(dirName, 'app/config/constant.config.js')
    	}
	},
  	plugins: [
        // 自动创建html文件
        new htmlWebpackPlugin()
	],
	// 部署资源映射
	devtool: 'cheap-module-source-map',
};







	

