var path = require("path"),
    assets_path = path.join("app", "assets", "javascripts");

module.exports = {
    entry: "./app/assets/frontend/home.js.jsx",
    output: {
        path: assets_path,
        filename: "bundle.js"
    },
    resolve: {
      extensions: ['', '.jsx'],
      path: __dirname
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "babel-loader" }
        ]
    }
};
