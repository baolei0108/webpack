var Webpack = require("webpack");//必须引入
var path = require('path');
module.exports = {
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
      //path: __dirname + "/public",//打包后的文件存放的地方
      path: path.resolve("./public"),//打包后的文件存放的地方
      filename: ""//打包后输出文件的文件名
    },
	module: {  
        rules: [  
            {  
                test: /\.css$/,  
                use: ['style-loader', 'css-loader']  
            }  
        ]  
    }  ,
	plugins: [
    //new Webpack.BannerPlugin("这里是打包文件头部注释！")//注意这是一个数组..
   ]

	
	
	
  }






  