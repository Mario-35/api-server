/**
 * Jest configuration
 *
 * @see https://jestjs.io/docs/en/configuration
 * @copyright 2020-present Inrae
 * @author mario.adam@inrae.fr
 *
 * @type {import("@jest/types").Config.InitialOptions}
 */

module.exports = {
  testPathIgnorePatterns: [
    "<rootDir>/.cache/",
    "<rootDir>/.github/",
    "<rootDir>/.vscode/",
    "<rootDir>/.yarn/",
    "<rootDir>/db/",
    "<rootDir>/dist/",
    "<rootDir>/scripts/",
    "<rootDir>/web/out/",
  ],
};
