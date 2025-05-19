import { combineProducers, InferState } from "@rbxts/reflex";
import { visible } from "./slices/visible";
import { inventory } from "slices/inventory";

export type RootProducer = typeof producer;
export type RootState = InferState<RootProducer>;

export const producer = combineProducers({
	visible,
	inventory,
});
