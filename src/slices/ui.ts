import { createProducer } from "@rbxts/reflex";

interface InitialState {
	visible: boolean;
	search: string;
}

const INITIAL_STATE: InitialState = {
	visible: false,
	search: "",
};

export const ui = createProducer(INITIAL_STATE, {
	setVisible: (state, visible: boolean) => ({ ...state, visible }),
	setSearch: (state, search: string) => ({ ...state, search }),
});
