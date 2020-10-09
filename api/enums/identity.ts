/**
 * 0Auth identity provider.
 *
 * @copyright 2020-present Inrae
 * @author mario.adam@inrae.fr
 */

import { mapValues } from "lodash";
import { GraphQLEnumType } from "graphql";
import { IdentityProvider } from "db/types";

export const IdentityProviderType = new GraphQLEnumType({
  name: "IdentityProvider",
  values: mapValues(IdentityProvider, (value) => ({ value })),
});
