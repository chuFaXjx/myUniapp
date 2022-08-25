module.exports = {
	devServer: {
		proxy: {
			"/api": {
				//匹配所有以'/api'开头的请求路径
				target: 'http://localhost:3309', // 代理目标的基础路径
				pathRewrite: {
					"^/api": ""
				}, // 代理往后端服务器的请求去掉/api前缀
				ws: true, // WebSocket
				changeOrigin: true,
			},
		},
	},
}
