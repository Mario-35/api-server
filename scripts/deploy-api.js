/**
 * Deploys application bundle to Google Cloud Functions (GCF). Usage:
 *
 *   $ yarn deploy [--version=#0] [--env=#1]
 *
 * @copyright 2020-present Inrae
 * @author mario.adam@inrae.fr
 */

require("env");
const spawn = require("cross-spawn");
const minimist = require("minimist");

const env = process.env;
const pkg = require("api/package.json");
// const region = env.GOOGLE_CLOUD_REGION;

const { version } = minimist(process.argv.slice(2), {
  default: { version: process.env.VERSION },
});

const source = `gs://${process.env.PKG_BUCKET}/${pkg.name}_${version}.zip`;

console.log(`Deploying ${source} to ${env.APP_ENV}...`);

const envVars = [
  `NODE_OPTIONS=--require ./.pnp.js`,
  `APP_NAME=${env.APP_NAME}`,
  `APP_ORIGIN=${env.APP_ORIGIN}`,
  `APP_ENV=${env.APP_ENV}`,
  `VERSION=${version}`,
  `JWT_SECRET=${env.JWT_SECRET}`,
  `PGHOST=/cloudsql/${env.PGSERVERNAME.replace(":", `:${region}:`)}`,
  `PGUSER=${env.PGUSER}`,
  `PGPASSWORD=${env.PGPASSWORD}`,
  `PGDATABASE=${env.PGDATABASE}`,
  `PGAPPNAME=${pkg.name}_${version}_${env.APP_ENV}`,
];

spawn(
  "gcloud",
  [
    `--project=${env.GOOGLE_CLOUD_PROJECT}`,
    `functions`,
    `deploy`,
    pkg.name,
    `--region=${env.GOOGLE_CLOUD_REGION}`,
    `--allow-unauthenticated`,
    `--entry-point=${pkg.name}`,
    `--memory=2GB`,
    `--runtime=nodejs12`,
    `--source=${source}`,
    `--timeout=30`,
    `--set-env-vars=${envVars.join(",")}`,
    `--trigger-http`,
  ],
  { stdio: "inherit" },
).on("error", (err) => {
  console.error(err);
  process.exit(1);
});
