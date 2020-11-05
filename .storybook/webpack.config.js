const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      // Loader for webpack to process CSS with PostCSS
      {
        loader: "postcss-loader",
        options: {
          sourceMap: true,
          config: {
            path: "./.storybook/"
          }
        }
      }
    ],

    include: path.resolve(__dirname, "../")
  });

  return config;
};
