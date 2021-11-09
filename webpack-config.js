module.exports = {
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            // Prefer `dart-sass`
                            implementation: require.resolve("sass"),
                        },
                    },
                ],
            },
        ],
        output: {
            path: path.resolve(__dirname, './src/scss/dist'),
            filename: 'main.css',
        }
    },
};
