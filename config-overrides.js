const { alias, configPaths, aliasJest } = require("react-app-rewire-alias");

const aliasMap = configPaths("./base-tsconfig.json");

module.exports = function override(config) {
  return alias(aliasMap)(config);
};

module.exports.jest = aliasJest(aliasMap);
