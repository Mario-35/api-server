/**
 * Babel configuration
 *
 * @see https://babeljs.io/docs/en/options
 * @copyright 2020-present Inrae
 * @author mario.adam@inrae.fr
 *
 * @param {import("@babel/core").ConfigAPI} api
 * @returns {import("@babel/core").TransformOptions}
 */

module.exports = function config(api) {
  return {
    presets: [
      "next/babel",
      "@emotion/babel-preset-css-prop",
      {
        sourceMap: api.env() !== "production",
      },
    ],
    plugins: ["relay"],
  };
};
