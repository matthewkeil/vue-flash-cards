module.exports = function override(config, env) {
  //   const rules = config.module.rules[1].oneOf;
  //   for (const rule of rules) {
  //     if (`${rule.test}`.includes("css")) {
  //       const [styleLoader, cssLoader, ...rest] = rule.use;

  //       console.log(cssLoader);

  //       rule.use = [
  //         styleLoader,
  //         "@teamsupercell/typings-for-css-modules-loader",
  //         ...rest,
  //       ];
  //     }
  //   }
  //   config.module.rules[1].oneOf = rules;
  //   process.exit(1);
  return config;
};
