// overmind/index.ts
import { IContext } from "overmind";
import {
  createActionsHook,
  createReactionHook,
  createStateHook,
} from "overmind-react";
import * as actions from "./actions";
import { state } from "./state";

export const config = {
  state,
  actions,
};

export type Context = IContext<typeof config>;

export const useAppState = createStateHook<Context>();
export const useActions = createActionsHook<Context>();
// export const useEffects = createEffectsHook<Context>();
export const useReaction = createReactionHook<Context>();
