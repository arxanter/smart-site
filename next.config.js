const withCSS = require('@zeit/next-css');
const withTM = require('next-transpile-modules');

// https://spectrum.chat/thread/ba3668b1-f0b1-42a6-9c71-d7d9d3b67f04
if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {};
}

module.exports = withTM(
  withCSS({
    webpack: (config, { dev }) => {
      if (!dev) config.optimization.minimize = true;
      return config;
    },
    // transpileModules: ['modali'],
  })
);
