/**
 * @copyright 2020-present Inrae
 * @author mario.adam@inrae.fr
 */

import { Theme as ThemeBase } from "./theme";

declare module "@emotion/react" {
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface Theme extends ThemeBase {}
}
