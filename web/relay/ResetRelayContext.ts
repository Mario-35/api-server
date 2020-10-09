/**
 * @copyright 2020-present Inrae
 * @author mario.adam@inrae.fr
 */

import React from "react";

export type ResetRelayFn = () => void;

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ResetRelayContext = React.createContext<ResetRelayFn>(() => {});
