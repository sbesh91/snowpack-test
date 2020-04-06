let configs = require('./snowpack.dev');

configs = {
  ...configs,
  installOptions: {
    ...configs.installOptions,
    optimize: true,
    stat: true,
    hash: true,
    clean: true,
    babel: true
  }
};

console.log(configs);

module.exports = configs;