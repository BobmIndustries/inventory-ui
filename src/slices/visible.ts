import { createProducer } from "@rbxts/reflex";

export const visible = createProducer(false, {
	setVisible: (state, visible: boolean) => visible,
});
