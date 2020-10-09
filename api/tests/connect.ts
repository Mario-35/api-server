import express, { Request, Response } from "express";

import { api } from "../index";
export const app = express();

app.use(api);

app.get("/", (req: Request, res: Response) => {
  res.redirect("/graphql");
});

app.listen("8080", () => {
  if (process.env.NODE_ENV !== "test") {
    console.log(`API listening on http://localhost:${env.PORT}/`);
  }
});
