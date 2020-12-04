const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: ['./Scripts/Main.js', './Styles/index.scss'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'wwwroot'),
    }
    ,module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules | wwwroot)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [['@babel/preset-env',
                            {
                                "targets": {
                                    "edge": "87",
                                    "firefox": "85",
                                    "chrome": "87"
                                }
                            }]]
                    }
                }
            }
            ,{
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
    ,plugins: [new htmlWebpackPlugin({
        title: "The title",
        template:'./Templates/Index.html'
    })]
};
