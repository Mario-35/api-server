/**
 * GraphQL API launcher used for local development.
 *
 * @copyright 2020-present Inrae
 * @author mario.adam@inrae.fr
 */

require("env");
require("@babel/register")({
  rootMode: "upward",
  extensions: [".ts", ".d.ts"],
  include: [],
});

const express = require("express");

const { api } = require("./index");
const { updateSchema } = require("./schema");

const app = express();
const port = process.env.PORT || 8080;
const { env } = process;

app.use(api);
app.get("/", (req, res) => {
  res.redirect("/graphql");
});

app.listen(port, () => {
  process.stdout.write(`[api] http://localhost:${port}/ `);
  console.log({ env: env.APP_ENV, version: env.VERSION, db: env.PGDATABASE });
  updateSchema();
});
