const path = require("path");

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "gsap/ScrollTrigger": path.resolve(
      __dirname,
      "node_modules/gsap/ScrollTrigger.js"
    ), // Alias to fix the import
  };
  return config;
};
