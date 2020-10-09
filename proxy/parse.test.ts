/**
 * @copyright 2020-present Inrae
 * @author mario.adam@inrae.fr
 */

import { parseHostname } from "./parse";

[
  ["example.com", "prod", undefined],
  ["test.example.com", "test", undefined],
  ["123-test.example.com", "test", "123"],
  ["dev.example.com", "dev", undefined],
  ["123-dev.example.com", "dev", "123"],
].forEach(([hostname, env, ver]) => {
  it(`parseHostname(${hostname}) => [${env}, ${ver}]`, () => {
    const result = parseHostname(hostname as string);
    expect(result).toStrictEqual([env, ver]);
  });
});
