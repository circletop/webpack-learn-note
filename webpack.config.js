// import {Configuration} from 'webpack' 

const path = require('path')

/**
 * @type {Configuration}
 */
const config = {
    mode: "none",
    entry: './src/main.css',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'output')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    }
}

module.exports = config