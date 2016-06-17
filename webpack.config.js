module.exports = {
    entry: "./entry.ts",
    target: "electron",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.ts?$/, loader: "ts-loader", exclude: /node_modules/ }
        ]
    }
};
