const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  webpack: (config, { dev }) => {
    if (!dev) config.optimization.minimize = true;
    return config;
  },
});
