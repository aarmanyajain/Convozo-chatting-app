module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Example plugin
      ["@babel/plugin-proposal-decorators", { legacy: true }],
    ],
  };
};
