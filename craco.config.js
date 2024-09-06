const path = require("path");
const CracoLessPlugin = require("craco-less");
const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      util: resolve("src/util"),
      assets: resolve('src/assets'),
      fetch: resolve('src/services')
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
};
