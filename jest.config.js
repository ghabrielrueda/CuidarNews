const dotEnv = require("dotenv");
dotEnv.config({
  path: ".env.development",
});

const nextJest = require("next/jest");

const creatJestConfig = nextJest({
  dir: ".",
});

const jestConfig = creatJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
});

module.exports = jestConfig;
