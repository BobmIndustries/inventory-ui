import { combineProducers, InferState } from "@rbxts/reflex";
import { ui } from "./slices/ui";
import { inventory } from "slices/inventory";

export type RootProducer = typeof producer;
export type RootState = InferState<RootProducer>;

export const producer = combineProducers({
	ui,
	inventory,
});
