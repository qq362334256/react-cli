const { module: {rules} } = require('./webpack.base.js');

// 导出开发配置对象
module.exports = {
	module: {
		rules: [...rules, {
			test: /\.less$/,
			use: {
				'style-loader',
				{ loader: 'css-loader', options: { importLoaders: 1 } },
          		'less-loader'
			}
		}]
	}
};