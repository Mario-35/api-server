/**
 * Global type definitions (overrides).
 *
 * @copyright 2020-present Inrae
 * @author mario.adam@inrae.fr
 */

import type { User } from "db";

declare global {
  namespace Express {
    interface Request {
      user: User | null;
      signIn: (user: User | null | undefined) => Promise<User | null>;
      signOut: () => void;
    }
  }
}
