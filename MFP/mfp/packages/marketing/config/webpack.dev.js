const {merge}=require('webpack-merge');

const htmlWebPackPlugin=require('html-webpack-plugin');

const devConfig={
    mode:'development',
    devServer:{
        port:8081,
        historyApiFallback:{
            index:'index.html'
        }

    },
    plugins:[
        new htmlWebPackPlugin({
            template:'.public/index.html',
        })
    ]
}


module.exports=merge(commonConfig,devConfig);