const path = require('path')

module.exports ={
    mode: 'none',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'script.js'
    },

    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{ 
            test: /\.css$/, 
            loader: "style-loader!css-loader" 
          
        }]
    },

    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname),
        historyApiFallback: true
    }
}
