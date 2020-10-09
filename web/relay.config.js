/**
 * Relay.js configuration
 *
 * @see https://relay.dev/docs/en/installation-and-setup
 * @copyright 2020-present Inrae
 * @author mario.adam@inrae.fr
 *
 * @type {import("relay-compiler/lib/bin/RelayCompilerMain").Config}
 */

module.exports = {
  src: ".",
  schema: "../api/schema.graphql",
  language: "typescript",
  exclude: ["**/__generated__/**", "**/__mocks__/**", "**/.next/**", "**/test/**"],
};
