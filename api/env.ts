/**
 * * Ensures that all of the environment dependencies are met.
 *
 * @see https://github.com/motdotla/dotenv
 * @copyright 2020-present Inrae
 * @author mario.adam@inrae.fr
 */

import * as dotenv from "dotenv";

const appName = process.env.APP_NAME?.replace(/^W/g, "");
const head = "\x1b[32m%s\x1b[36m%s\x1b[33m%s\x1b[32m%s\x1b[0m";
const body = "\x1b[36m%s\x1b[33m%s\x1b[0m";

if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: process.cwd() + "/env/.env.test" });
} else {
  console.log(head, "==== ", "env : ", process.env.NODE_ENV, " ====");
  console.log(body, "App name : ", appName);
  console.log(body, "App origin : ", process.env.APP_ORIGIN);
  console.log(body, "App env : ", process.env.APP_ENV);
  console.log(body, "Version : ", process.env.VERSION);

  console.log(body, "Cookie : ", process.env.JWT_COOKIE);
  console.log(body, "Cookie secret : ", process.env.JWT_SECRET);
  console.log(body, "Cookie expire: ", process.env.JWT_EXPIRES);

  console.log(body, "Host : ", process.env.PGHOST);
  console.log(body, "Database : ", process.env.PGDATABASE);
  console.log(body, "Schema : ", process.env.PGSCHEMA);
  console.log(body, "Port : ", process.env.PGPORT);
  console.log(body, "User : ", process.env.PGUSER);
  console.log(body, "Password : ", process.env.PGPASSWORD);
  console.log(body, "Listen port : ", process.env.PORT);
  console.log(body, "Graphiql : ", process.env.GRAPHIQL);
  console.log(body, "Debug : ", process.env.DEBUGSQL);
  console.log("\x1b[32m%s\x1b[0m", "============================");
}

export default process.env;

// import { cleanEnv, str, num, bool, url } from "envalid";

// const appName = process.env.APP_NAME?.replace(/^W/g, "");

// export default cleanEnv(
//   process.env,
//   {
//     APP_NAME: str(),
//     APP_ORIGIN: url(),
//     APP_ENV: str({ choices: ["production", "test", "development", "local"] }),

//     VERSION: str(),

//     JWT_COOKIE: str({ default: "id", devDefault: `id_${appName}` }),
//     JWT_SECRET: str(),
//     JWT_EXPIRES: num({ default: 60 * 60 * 24 * 14 /* 2 weeks */ }),

//     PGHOST: str(),
//     PGPORT: num({ default: 5432 }),
//     PGUSER: str(),
//     PGPASSWORD: str(),
//     PGDATABASE: str(),
//     PGSSLMODE: str({ choices: ["disable", "verify-ca"], default: "disable" }),
//     PGSSLCERT: str({ default: "" }),
//     PGSSLKEY: str({ default: "" }),
//     PGSSLROOTCERT: str({ default: "" }),
//     PGSERVERNAME: str({ default: "" }),
//     PGDEBUG: bool({ default: false }),
//   },
//   { dotEnvPath: null },
// );
