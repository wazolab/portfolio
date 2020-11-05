const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        vueDocgenOptions: {
          alias: {
            "@": path.resolve(__dirname, "../")
          }
        }
      }
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
};
